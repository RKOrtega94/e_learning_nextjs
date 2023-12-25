import { IQuestionnaireDataSource } from "@/domain/datasourse/_data_source";
import { Questionnaire } from "@model/_model";
import { PrismaClient } from "@prisma/client";

export default class QuestionnaireDataSource
  implements IQuestionnaireDataSource
{
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  getAll(): Promise<Questionnaire[]> {
    const questionnaires: Questionnaire[] = [];
    return this.prisma.questionnaire
      .findMany()
      .then((data) => {
        data.forEach((questionnaire) =>
          questionnaires.push(Questionnaire.fromData(questionnaire))
        );
        return questionnaires;
      })
      .catch((err) => {
        throw new Error(err);
      });
  }
  async create(questionnaire: Questionnaire): Promise<Questionnaire> {
    const newQuestionnaire = await this.prisma.questionnaire.create({
      data: {
        name: questionnaire.name,
        description: questionnaire.description,
        status: questionnaire.status ?? true,
        classroomId: questionnaire.classroomId,
      },
    });

    return Questionnaire.fromData(newQuestionnaire);
  }
}
