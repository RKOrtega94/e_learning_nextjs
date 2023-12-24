import { Classroom } from "@/data/model/_model";
import { ICreateClassroomUseCase } from "@/domain/use_cases/_use_cases";
import { IClassroomRepository } from "@repository/_repositories";

export default class CreateClassroomUseCase implements ICreateClassroomUseCase {
  private _repository: IClassroomRepository;

  constructor(repository: IClassroomRepository) {
    this._repository = repository;
  }

  async execute(classroom: Classroom): Promise<Classroom> {
    return await this._repository.create(classroom);
  }
}
