import { NextResponse, NextRequest } from "next/server";
import { generateCode } from "@/libs/generators";
import { prisma } from "@/libs/prisma";
import {
  SuccessResponse,
  ErrorResponse,
} from "@/interfaces/response.interface";

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

    const classrooms = await prisma.classroom.findMany();

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
    const { name, capacity } = await request.json();
    const code = generateCode();

    const newClassroom = await prisma.classroom.create({
      data: { name, capacity, code },
    });

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
