import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import {
  SuccessResponse,
  ErrorResponse,
} from "@/data/interfaces/response.interface";

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const questionnaires = await prisma.questionnaire.findMany({
      include: {
        questions: true,
      },
    });

    return NextResponse.json(
      SuccessResponse.json("Questionnaires retrieved", questionnaires)
    );
  } catch (error: any) {
    return NextResponse.json(
      ErrorResponse.json("Error getting classrooms", [error.message]),
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const data = await request.formData();

    const name = data.get("name")?.toString() || "";
    const description = data.get("description")?.toString() || "";
    const classroomId = data.get("classroomId")?.toString() || "";

    const classroom = await prisma.classroom.findUnique({
      where: {
        id: classroomId,
      },
    });

    if (!classroom) {
      return NextResponse.json(
        ErrorResponse.json("Classroom not found", ["Classroom not found"]),
        { status: 404 }
      );
    }

    const questionnaire = await prisma.questionnaire.create({
      data: {
        name: name,
        description: description,
        classroomId: classroomId,
      },
    });

    return NextResponse.json(
      SuccessResponse.json("Questionnaire created", questionnaire)
    );
  } catch (error: any) {
    return NextResponse.json(
      ErrorResponse.json("Error creating classroom", [error.message]),
      { status: 500 }
    );
  }
}
