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

    const resourceType = await prisma.resourceType.findUnique({
      where: { id: id },
    });

    if (!resourceType)
      return NextResponse.json(
        ErrorResponse.json("Resource type not found", []),
        {
          status: 404,
        }
      );

    return NextResponse.json(
      SuccessResponse.json("Resource type retrieved", resourceType)
    );
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
    const { name } = await request.json();

    const resourceType = await prisma.resourceType.findUnique({
      where: { id: id },
    });

    if (!resourceType)
      return NextResponse.json(
        ErrorResponse.json("Resource type not found", []),
        {
          status: 404,
        }
      );

    const updatedResourceType = await prisma.resourceType.update({
      where: { id: id },
      data: { name },
    });

    return NextResponse.json(
      SuccessResponse.json("Resource type updated", updatedResourceType)
    );
  } catch (error: any) {
    return NextResponse.json(
      ErrorResponse.json("Error updating resource type", [error.message]),
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    const { id } = params;

    const resourceType = await prisma.resourceType.findUnique({
      where: { id: id },
    });

    if (!resourceType)
      return NextResponse.json(
        ErrorResponse.json("Resource type not found", []),
        {
          status: 404,
        }
      );

    await prisma.resourceType.delete({
      where: { id: id },
    });

    return NextResponse.json(
      SuccessResponse.json("Resource type deleted", resourceType)
    );
  } catch (error: any) {
    return NextResponse.json(
      ErrorResponse.json("Error deleting resource type", [error.message]),
      { status: 500 }
    );
  }
}
