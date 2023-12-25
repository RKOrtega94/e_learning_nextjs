import { Questionnaire } from "@/data/model/_model";
import { IGetAllQuestionnaireUseCase } from "@/domain/use_cases/_use_cases";
import { IQuestionnaireRepository } from "@repository/_repositories";

export default class GetAllQuestionnaireUseCase
  implements IGetAllQuestionnaireUseCase
{
  private _repository: IQuestionnaireRepository;

  constructor(repository: IQuestionnaireRepository) {
    this._repository = repository;
  }

  async execute(): Promise<Questionnaire[]> {
    return await this._repository.getAll();
  }
}
