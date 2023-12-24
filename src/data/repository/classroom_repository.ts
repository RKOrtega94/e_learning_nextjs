import { IClassroomDataSource } from "@/domain/datasourde/_data_source";
import Classroom from "@/domain/interface/classroom_interface";
import { IClassroomRepository } from "@repository/_repositories";

export default class ClassroomRepository implements IClassroomRepository {
  _ds: IClassroomDataSource;

  constructor(ds: IClassroomDataSource) {
    this._ds = ds;
  }

  getAll(): Promise<Classroom[]> {
    throw new Error("Method not implemented.");
  }
  create(classroom: Classroom): Promise<Classroom> {
    throw new Error("Method not implemented.");
  }
}
