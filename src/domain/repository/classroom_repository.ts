import { IClassroom } from "../interface/_interfaces";

abstract class ClassroomRepository {
  abstract getClassroomById(id: string): Promise<IClassroom>;
  abstract createClassroom(classroom: IClassroom): Promise<IClassroom>;
  abstract updateClassroom(classroom: IClassroom): Promise<IClassroom>;
  abstract deleteClassroom(id: string): Promise<void>;
}
