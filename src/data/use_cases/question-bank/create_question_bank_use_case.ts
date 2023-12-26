import { IQuestionBank } from "@/domain/interface/_interfaces";
import { IQuestionBankRepository } from "@/domain/repository/_repositories";
import { ICreateQuestionBankUseCase } from "@/domain/use_cases/_use_cases";

export default class CreateQuestionBankUseCase
  implements ICreateQuestionBankUseCase
{
  private _repository: IQuestionBankRepository;

  constructor(repository: IQuestionBankRepository) {
    this._repository = repository;
  }
  async execute(questionnaireData: IQuestionBank): Promise<IQuestionBank> {
    return await this._repository.create(questionnaireData);
  }
}
