import { IQuestionBankDataSource } from "@/domain/datasourse/_data_source";
import { IQuestionBankRepository } from "@/domain/repository/_repositories";
import { IQuestionBank } from "@interface/_interfaces";

export default class QuestionBankRepository implements IQuestionBankRepository {
  _ds: IQuestionBankDataSource;

  constructor(ds: IQuestionBankDataSource) {
    this._ds = ds;
  }

  getAll(): Promise<IQuestionBank[]> {
    return this._ds.getAll();
  }

  create(questionBank: IQuestionBank): Promise<IQuestionBank> {
    return this._ds.create(questionBank);
  }
}
