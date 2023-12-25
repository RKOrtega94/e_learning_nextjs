import { Questionnaire } from "@model/_model";
import { IQuestionnaireRepository } from "@/domain/repository/_repositories";
import { IClassroom } from "@/domain/interface/_interfaces";
import { IQuestionnaireDataSource } from "@/domain/datasourse/_data_source";

export default class QuestionnaireRepository
  implements IQuestionnaireRepository
{
  _ds: IQuestionnaireDataSource;

  constructor(ds: IQuestionnaireDataSource) {
    this._ds = ds;
  }

  getAll(): Promise<Questionnaire[]> {
    return this._ds.getAll();
  }
  create(questionnaire: Questionnaire): Promise<Questionnaire> {
    return this._ds.create(questionnaire);
  }
}
