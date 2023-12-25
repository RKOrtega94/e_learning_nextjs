import { IQuestionnaireDataSource } from "@/domain/datasourse/_data_source";
import { Questionnaire } from "@model/_model";

export default class QuestionnaireDataSource
  implements IQuestionnaireDataSource
{
  getAll(): Promise<Questionnaire[]> {
    throw new Error("Method not implemented.");
  }
  create(questionnaire: Questionnaire): Promise<Questionnaire> {
    throw new Error("Method not implemented.");
  }
}
