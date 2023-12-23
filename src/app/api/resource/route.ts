import {
  ErrorResponse,
  SuccessResponse,
} from "@/data/interfaces/response.interface";
import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

import { loadFile } from "@/presentation/services/file.service";

export async function GET(): Promise<NextResponse> {
  try {
    const resources = await prisma.resource.findMany();

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

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const data = await request.formData();
    const file = data.get("file");

    console.log(file);

    const name = data.get("name")?.toString() || "";
    const description = data.get("description")?.toString() || "";
    const classroomId = data.get("classroomId")?.toString() || "";
    const resourceType = data.get("typeId")?.toString() || "";

    const _file: File = file as File;

    console.log({
      name,
      description,
      classroomId,
      typeId: resourceType,
    });

    const newResource = await prisma.resource.create({
      data: {
        name: name,
        description: description,
        classroomId: classroomId,
        typeId: resourceType,
      },
    });

    const path: string = await loadFile({
      file: _file,
      name: newResource.id,
      path: "resources",
    });

    const updatedResource = await prisma.resource.update({
      where: {
        id: newResource.id,
      },
      data: {
        path: path,
      },
    });

    return NextResponse.json(
      SuccessResponse.json("Resource created", updatedResource)
    );
  } catch (error: any) {
    return NextResponse.json(
      ErrorResponse.json("Error getting types", [error.message]),
      { status: 500 }
    );
  }
}
