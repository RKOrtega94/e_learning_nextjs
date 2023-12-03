import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import {
  SuccessResponse,
  ErrorResponse,
} from "@/interfaces/response.interface";

interface Params {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const { id } = params;
    const classroom = await prisma.classroom.findUnique({
      where: { id: id },
    });

    if (!classroom)
      return NextResponse.json(ErrorResponse.json("Classroom not found", []), {
        status: 404,
      });

    // Get resources from classroom
    const resources = await prisma.resource.findMany({
      where: { classroomId: id },
    });

    const data = {
      ...classroom,
      resources: resources,
    };

    return NextResponse.json(SuccessResponse.json("Classroom retrieved", data));
  } catch (error: any) {
    return NextResponse.json(
      ErrorResponse.json("Error getting classroom", [error.message]),
      { status: 500 }
    );
  }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const { id } = params;
    const { name, capacity } = await request.json();

    const classroom = await prisma.classroom.findUnique({
      where: { id: id },
    });

    if (!classroom)
      return NextResponse.json(ErrorResponse.json("Classroom not found", []), {
        status: 404,
      });

    const updatedClassroom = await prisma.classroom.update({
      where: { id: id },
      data: { name, capacity },
    });

    return NextResponse.json(
      SuccessResponse.json("Classroom updated", updatedClassroom)
    );
  } catch (error: any) {
    return NextResponse.json(
      ErrorResponse.json("Error updating classroom", [error.message]),
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    const { id } = params;

    const classroom = await prisma.classroom.findUnique({
      where: { id: id },
    });

    if (!classroom)
      return NextResponse.json(ErrorResponse.json("Classroom not found", []), {
        status: 404,
      });

    await prisma.classroom.delete({ where: { id: id } });

    return NextResponse.json(SuccessResponse.json("Classroom deleted", []));
  } catch (error: any) {
    return NextResponse.json(
      ErrorResponse.json("Error deleting classroom", [error.message]),
      { status: 500 }
    );
  }
}
