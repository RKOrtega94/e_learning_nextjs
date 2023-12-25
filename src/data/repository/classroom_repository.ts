import { IClassroomDataSource } from "@/domain/datasourse/_data_source";
import Classroom from "@/domain/interface/classroom_interface";
import { IClassroomRepository } from "@repository/_repositories";

export default class ClassroomRepository implements IClassroomRepository {
  _ds: IClassroomDataSource;

  constructor(ds: IClassroomDataSource) {
    this._ds = ds;
  }

  getAll(): Promise<Classroom[]> {
    return this._ds.getAllClassrooms();
  }
  create(classroom: Classroom): Promise<Classroom> {
    return this._ds.createClassroom(classroom);
  }
}
