import { Questionnaire } from "@/data/model/_model";
import { ICreateQuestionnaireUseCase } from "@/domain/use_cases/_use_cases";
import { IQuestionnaireRepository } from "@repository/_repositories";

export default class CreateQuestionnaireUseCase
  implements ICreateQuestionnaireUseCase
{
  private _repository: IQuestionnaireRepository;

  constructor(repository: IQuestionnaireRepository) {
    this._repository = repository;
  }
  async execute(questionnaireData: Questionnaire): Promise<Questionnaire> {
    return await this._repository.create(questionnaireData);
  }
}
