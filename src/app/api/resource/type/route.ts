import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import {
  SuccessResponse,
  ErrorResponse,
} from "@/interfaces/response.interface";

export async function GET() {
  try {
    const types = await prisma.resourceType.findMany();

    return NextResponse.json(SuccessResponse.json("Types retrieved", types));
  } catch (error: any) {
    return NextResponse.json(
      ErrorResponse.json("Error getting types", [error.message]),
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { name, description, icon } = await request.json();

    const newType = await prisma.resourceType.create({
      data: { name, description, icon },
    });

    return NextResponse.json(SuccessResponse.json("Type created", newType));
  } catch (error: any) {
    return NextResponse.json(
      ErrorResponse.json("Error creating type", [error.message]),
      { status: 500 }
    );
  }
}