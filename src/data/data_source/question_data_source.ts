import { IQuestionDataSource } from "@/domain/datasourse/_data_source";
import { Question } from "@model/_model";
import { PrismaClient } from "@prisma/client";

export default class QuestionDataSource implements IQuestionDataSource {
  prisma: PrismaClient;

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
  create(question: Question): Promise<Question> {
    throw new Error("Method not implemented.");
  }
}
