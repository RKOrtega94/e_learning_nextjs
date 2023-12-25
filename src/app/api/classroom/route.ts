import { NextResponse, NextRequest } from "next/server";
import { generateCode } from "@/libs/generators";
import { prisma } from "@/libs/prisma";
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
    let classrooms: Classroom[] = [];

    classrooms = await getAll.execute();

    return NextResponse.json(SuccessResponse.json("Classrooms", classrooms));
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
export async function POST(request: Request): Promise<NextResponse> {
  try {
    const data = await request.formData();

    let name: string = data.get("name")?.toString() || "";
    let capacity: number = Number(data.get("capacity")?.toString()) || 0;
    let cover: File = data.get("cover") as File;

    const classroom: Classroom = new Classroom({
      name: name,
      capacity: capacity,
      code: generateCode(),
      cover: await parseFileToBase64(cover),
    });

    let newClassroom: Classroom = await create.execute(classroom);

    return NextResponse.json(
      SuccessResponse.json("Classroom created", newClassroom)
    );
  } catch (error: any) {
    return NextResponse.json(
      ErrorResponse.json("Error creating classroom", [error.message]),
      { status: 500 }
    );
  }
}
