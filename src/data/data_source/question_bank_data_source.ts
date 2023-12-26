import { IQuestionBankDataSource } from "@/domain/datasourse/_data_source";
import { PrismaClient } from "@prisma/client";
import { QuestionBank } from "@model/_model";

export default class QuestionBankDataSource implements IQuestionBankDataSource {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAll(): Promise<QuestionBank[]> {
    const questionBanks: QuestionBank[] = [];
    const data = await this.prisma.questionBank.findMany();

    data.forEach((questionBank) =>
      questionBanks.push(QuestionBank.fromData(questionBank))
    );

    return questionBanks;
  }

  async create(questionBank: QuestionBank): Promise<QuestionBank> {
    const newQuestionnaire = await this.prisma.questionBank.create({
      data: {
        name: questionBank.name,
        description: questionBank.description,
        status: questionBank.status,
        classroomId: questionBank.classroomId,
      },
    });

    return QuestionBank.fromData(newQuestionnaire);
  }
}
