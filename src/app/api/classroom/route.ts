import { NextResponse, NextRequest } from "next/server";
import { generateCode } from "@/libs/generators";
import { prisma } from "@/libs/prisma";
import {
  SuccessResponse,
  ErrorResponse,
} from "@/interfaces/response.interface";
import { parseFileToBase64 } from "@/libs/image_parsr";

/**
 * GET /api/classroom
 *
 * @returns {NextResponse}
 */
export async function GET(request: NextRequest) {
  try {
    // get page from query params
    const url = new URL(request.url);

    const page = Number(url.searchParams.get("page")) || 1;

    const classrooms = await prisma.classroom.findMany({
      include: {
        resources: true,
        students: true,
      },
    });

    return NextResponse.json(
      SuccessResponse.json("Classrooms retrieved", classrooms)
    );
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
export async function POST(request: Request) {
  try {
    console.log("POST");

    const data = await request.formData();
    const image = data.get("image");

    const name = data.get("name")?.toString() || "";
    // capacity parse to int
    const capacity = data.get("capacity")?.toString() || "";

    let cover = null;

    if (image) {
      cover = await parseFileToBase64(image);
    }

    const classroom = await prisma.classroom.create({
      data: {
        code: generateCode(),
        name: name,
        capacity: Number(capacity),
        cover: cover,
      },
    });

    console.log(classroom);

    return NextResponse.json(
      SuccessResponse.json("Classroom created", classroom)
    );
  } catch (error: any) {
    return NextResponse.json(
      ErrorResponse.json("Error creating classroom", [error.message]),
      { status: 500 }
    );
  }
}
