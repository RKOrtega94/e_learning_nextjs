import { Question } from "@model/_model";
import { IQuestionDataSource } from "@/domain/datasourse/_data_source";
import { IQuestionRepository } from "@/domain/repository/_repositories";

export default class QuestionRepository implements IQuestionRepository {
  _ds: IQuestionDataSource;

  constructor(ds: IQuestionDataSource) {
    this._ds = ds;
  }

  getAll(questionBankId: string): Promise<Question[]> {
    return this._ds.getAll(questionBankId);
  }
  create(question: Question): Promise<Question> {
    return this._ds.create(question);
  }
}
