import { NextResponse, NextRequest } from "next/server";
import {
  SuccessResponse,
  ErrorResponse,
} from "@/data/interfaces/response.interface";
import { CreateQuestion, GetAllQuestion } from "@/data/use_cases/_use_cases";
import { QuestionRepository } from "@/data/repository/_repository";
import { QuestionDataSource } from "@/data/data_source/_data_source";
import { QuestionType } from "@prisma/client";
import { Question } from "@model/_model";

const create = new CreateQuestion(
  new QuestionRepository(new QuestionDataSource())
);

const getAll = new GetAllQuestion(
  new QuestionRepository(new QuestionDataSource())
);

/**
 * Get all questions
 *
 * @route GET /api/question
 *
 * @param request - The incoming request object
 *
 * @returns {NextResponse} - The outgoing response object
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    // const limit = req.nextUrl.searchParams.get("limit");
    const questionBankId = request.nextUrl.searchParams.get("questionBankId");

    if (!questionBankId) {
      return NextResponse.json(
        ErrorResponse.json("Error getting questions", [
          "Question bank id is required",
        ]),
        { status: 400 }
      );
    }

    return getAll.execute(questionBankId).then((questions) => {
      return NextResponse.json(
        SuccessResponse.json("Questions retrieved", questions)
      );
    });
  } catch (error: any) {
    return NextResponse.json(
      ErrorResponse.json("Error getting questions", [error.message]),
      { status: 500 }
    );
  }
}

/**
 * Create a question
 *
 * @route POST /api/question
 *
 * @param request - The incoming request object
 *
 * @returns {NextResponse} - The outgoing response object
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const data = await request.formData();

    const questionType: string | null =
      data.get("questionType")?.toString() || null;
    const question: string = data.get("question")?.toString() || "";
    const answer: string = data.getAll("answer").toString() || "";
    const options: string = data.getAll("options").toString() || "";
    const questionBankId: string =
      data.get("questionBankId")?.toString().trim() || "";

    return create
      .execute(
        Question.fromData({
          questionType: questionType,
          question: question,
          answer: answer.split(","),
          options: options.split(","),
          questionBankId: questionBankId,
        })
      )
      .then((question) => {
        return NextResponse.json(
          SuccessResponse.json("Question created", question)
        );
      });
  } catch (error: any) {
    return NextResponse.json(
      ErrorResponse.json("Error creating question", [error.message]),
      { status: 500 }
    );
  }
}
