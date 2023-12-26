import { NextRequest, NextResponse } from "next/server";
import { QuestionBankDataSource } from "@/data/data_source/_data_source";
import { QuestionBankRepository } from "@/data/repository/_repository";
import {
  CreateQuestionBank,
  GetAllQuestionBank,
} from "@/data/use_cases/_use_cases";
import {
  SuccessResponse,
  ErrorResponse,
} from "@/data/interfaces/response.interface";
import { QuestionBank } from "@/data/model/_model";
import { PrismaClient } from "@prisma/client";

export default class QuestionBankService {
  prisma = new PrismaClient();

  create = new CreateQuestionBank(
    new QuestionBankRepository(new QuestionBankDataSource())
  );

  getAll = new GetAllQuestionBank(
    new QuestionBankRepository(new QuestionBankDataSource())
  );

  async getAllQuestionBanks(request: NextRequest): Promise<NextResponse> {
    try {
      const data = await this.getAll.execute();

      return NextResponse.json(
        SuccessResponse.json("Question banks retrieved", data)
      );
    } catch (error: any) {
      return NextResponse.json(
        ErrorResponse.json("Error getting question banks", [error.message]),
        { status: 500 }
      );
    }
  }

  async createQuestionBank(request: NextRequest): Promise<NextResponse> {
    try {
      const formData = await request.formData();

      const name = formData.get("name") || "";
      const description = formData.get("description") || "";
      const classroomId = formData.get("classroomId") || "";

      const classroom = await this.prisma.classroom.findUnique({
        where: {
          id: classroomId.toString(),
        },
      });

      if (!classroom) {
        return NextResponse.json(
          ErrorResponse.json("Classroom not found", ["Classroom not found"]),
          { status: 404 }
        );
      }

      const questionBank: QuestionBank = QuestionBank.fromData({
        name: name.toString(),
        description: description.toString(),
        classroomId: classroom.id,
      });

      const createdQuestionBank = await this.create.execute(questionBank);

      return NextResponse.json(
        SuccessResponse.json("Question bank created", createdQuestionBank)
      );
    } catch (error: any) {
      return NextResponse.json(
        ErrorResponse.json("Error creating question bank", [error.message]),
        { status: 500 }
      );
    }
  }
}
