import { NextResponse, NextRequest } from "next/server";
import { generateCode } from "@/libs/generators";
import {
  SuccessResponse,
  ErrorResponse,
} from "@/data/interfaces/response.interface";
import { parseFileToBase64 } from "@/libs/image_parse";
import { Classroom } from "@model/_model";
import { GetAllClassroom, CreateClassroom } from "@/data/use_cases/_use_cases";
import ClassroomRepository from "@/data/repository/classroom_repository";
import ClassroomDataSource from "@/data/data_source/classroom_data_source";

const getAll = new GetAllClassroom(
  new ClassroomRepository(new ClassroomDataSource())
);
const create = new CreateClassroom(
  new ClassroomRepository(new ClassroomDataSource())
);

/**
 * GET /api/classroom
 *
 * @returns {NextResponse}
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    return getAll.execute().then((classrooms: Classroom[]) => {
      return NextResponse.json(
        SuccessResponse.json("Classrooms found", classrooms)
      );
    });
  } catch (error: any) {
    return NextResponse.json(
      ErrorResponse.json("Error getting classrooms", [error.message]),
      { status: 500 }
    );
  }
}

/**
 * POST /api/classroom
 *
 * @param {Request} request
 *
 * @returns {NextResponse}
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const data = await request.formData();

    let name: string = data.get("name")?.toString() || "";
    let capacity: number = Number(data.get("capacity")?.toString()) || 0;
    let cover: File = data.get("cover") as File;

    return create
      .execute(
        Classroom.fromData({
          name: name,
          capacity: capacity,
          code: generateCode(),
          cover: cover ? await parseFileToBase64(cover) : null,
          status: true,
        })
      )
      .then((classroom: Classroom) => {
        return NextResponse.json(
          SuccessResponse.json("Classroom created", classroom)
        );
      });
  } catch (error: any) {
    return NextResponse.json(
      ErrorResponse.json("Error creating classroom", [error.message]),
      { status: 500 }
    );
  }
}
