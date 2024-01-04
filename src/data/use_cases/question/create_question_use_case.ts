import { Question } from "@/data/model/_model";
import { ICreateQuestionUseCase } from "@/domain/use_cases/_use_cases";
import { IQuestionRepository } from "@repository/_repositories";

export default class CreateQuestionUseCase implements ICreateQuestionUseCase {
  private _repository: IQuestionRepository;

  constructor(repository: IQuestionRepository) {
    this._repository = repository;
  }

  async execute(question: Question): Promise<Question> {
    return await this._repository.create(question);
  }
}
