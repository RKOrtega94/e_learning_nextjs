import { NextRequest, NextResponse } from "next/server";
import {
  SuccessResponse,
  ErrorResponse,
} from "@/data/interfaces/response.interface";
import {
  CreateQuestionnaire,
  GetAllQuestionnaire,
} from "@/data/use_cases/_use_cases";
import QuestionnaireRepository from "./../../../data/repository/questionnaire_repository";
import { QuestionnaireDataSource } from "@/data/data_source/_data_source";
import { Questionnaire } from "@model/_model";

const getAll = new GetAllQuestionnaire(
  new QuestionnaireRepository(new QuestionnaireDataSource())
);

const create = new CreateQuestionnaire(
  new QuestionnaireRepository(new QuestionnaireDataSource())
);

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const questionnaires = await getAll.execute();

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

    const questionnaire: Questionnaire = Questionnaire.fromData({
      name: name,
      description: description,
      classroomId: classroomId,
    });

    const newQuestionnaire: Questionnaire = await create.execute(questionnaire);

    return NextResponse.json(
      SuccessResponse.json("Questionnaire created", {
        ...newQuestionnaire,
        classroom,
      })
    );
  } catch (error: any) {
    return NextResponse.json(
      ErrorResponse.json("Error creating classroom", [error.message]),
      { status: 500 }
    );
  }
}
