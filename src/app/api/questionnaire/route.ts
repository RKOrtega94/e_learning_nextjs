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

export async function POST(request: NextRequest) {
  try {
  } catch (error) {}
}
