import { IQuestionDataSource } from "@/domain/datasourse/_data_source";
import { Question } from "@model/_model";
import { PrismaClient, QuestionType } from "@prisma/client";

export default class QuestionDataSource implements IQuestionDataSource {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAll(questionBankId: string): Promise<Question[]> {
    const data = await this.prisma.question.findMany({
      where: {
        questionBankId: questionBankId,
      },
    });

    return data.map((question) => Question.fromData(question));
  }

  async create(question: Question): Promise<Question> {
    const validQuestionType = question.questionType ?? "SINGLE_CHOICE";

    if (!(validQuestionType in QuestionType)) {
      throw new Error(`Invalid question type: ${validQuestionType}`);
    }

    const questionType =
      QuestionType[validQuestionType as keyof typeof QuestionType];

    const newQuestion: Question = await this.prisma.question.create({
      data: {
        questionType,
        question: question.question,
        answer: question.answer,
        options: question.options,
        questionBankId: question.questionBankId,
      },
    });

    return Question.fromData(newQuestion);
  }
}
