import { Question } from "@/data/model/_model";
import { IGetAllQuestionUseCase } from "@/domain/use_cases/_use_cases";
import { IQuestionRepository } from "@repository/_repositories";

export default class GetAllQuestionUseCase implements IGetAllQuestionUseCase {
  private _repository: IQuestionRepository;

  constructor(repository: IQuestionRepository) {
    this._repository = repository;
  }
  async execute(questionBankId: string): Promise<Question[]> {
    return await this._repository.getAll(questionBankId);
  }
}
