import {
  ErrorResponse,
  SuccessResponse,
} from "@/interfaces/response.interface";
import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  try {
    const resources = await prisma.resource.findMany();
    console.log(resources);

    return NextResponse.json(
      SuccessResponse.json("Resources retrieved", resources)
    );
  } catch (error: any) {
    return NextResponse.json(
      ErrorResponse.json("Error getting types", [error.message]),
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { resourceType, classroomId, name, description } =
      await request.json();

    console.log(resourceType, classroomId, name, description);

    // Check if resource type exists
    const resourceTypeExists = await prisma.resourceType.findUnique({
      where: { id: resourceType },
    });

    if (!resourceTypeExists) {
      return NextResponse.json(
        ErrorResponse.json("Resource type does not exist", [
          "Resource type does not exist",
        ]),
        { status: 400 }
      );
    }

    // Check if classroom exists
    const classroomExists = await prisma.classroom.findUnique({
      where: { id: classroomId },
    });

    if (!classroomExists) {
      return NextResponse.json(
        ErrorResponse.json("Classroom does not exist", [
          "Classroom does not exist",
        ]),
        { status: 400 }
      );
    }

    const newResource = await prisma.resource.create({
      data: {
        name: name,
        description: description,
        classroomId: classroomId,
        typeId: resourceType,
      },
    });

    console.log(newResource);

    return NextResponse.json(
      SuccessResponse.json("Resource created", newResource)
    );
  } catch (error: any) {
    return NextResponse.json(
      ErrorResponse.json("Error getting types", [error.message]),
      { status: 500 }
    );
  }
}
