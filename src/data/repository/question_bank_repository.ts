import { IQuestionBankDataSource } from "@/domain/datasourse/_data_source";
import { IQuestionBankRepository } from "@/domain/repository/_repositories";
import { QuestionBank } from "@/data/model/_model";

export default class QuestionBankRepository implements IQuestionBankRepository {
  _ds: IQuestionBankDataSource;

  constructor(ds: IQuestionBankDataSource) {
    this._ds = ds;
  }

  getAll(): Promise<QuestionBank[]> {
    return this._ds.getAll();
  }

  create(questionBank: QuestionBank): Promise<QuestionBank> {
    return this._ds.create(questionBank);
  }
}
