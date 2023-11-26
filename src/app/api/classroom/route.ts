import { NextResponse } from "next/server";
import { generateCode } from "@/libs/generators";
import { prisma } from "@/libs/prisma";
import {
  SuccessResponse,
  ErrorResponse,
} from "@/interfaces/response.interface";

export async function GET() {
  return NextResponse.json({ message: "getting classrooms..." });
}

export async function POST(request: Request) {
  try {
    const { name, capacity } = await request.json();
    const code = generateCode();
    console.log(code);
    console.log({ name, capacity });

    const newClassroom = await prisma.classroom.create({
      data: {
        name,
        capacity,
        code,
      },
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
