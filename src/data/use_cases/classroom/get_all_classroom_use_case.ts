import Classroom from "@/domain/interface/classroom_interface";
import { IGetAllClassroomUseCase } from "@/domain/use_cases/_use_cases";
import { IClassroomRepository } from "@repository/_repositories";

export default class GetAllClassroomUseCase implements IGetAllClassroomUseCase {
  private _repository: IClassroomRepository;

  constructor(repository: IClassroomRepository) {
    this._repository = repository;
  }

  async execute(): Promise<Classroom[]> {
    return await this._repository.getAll();
  }
}
