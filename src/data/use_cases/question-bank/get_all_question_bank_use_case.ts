import { IQuestionBankRepository } from "@/domain/repository/_repositories";
import { IGetAllQuestionBankUseCase } from "@/domain/use_cases/_use_cases";
import { IQuestionBank } from "@interface/_interfaces";

export default class GetAllQuestionBankUseCase
  implements IGetAllQuestionBankUseCase
{
  private _repository: IQuestionBankRepository;

  constructor(repository: IQuestionBankRepository) {
    this._repository = repository;
  }

  async execute(): Promise<IQuestionBank[]> {
    return await this._repository.getAll();
  }
}
