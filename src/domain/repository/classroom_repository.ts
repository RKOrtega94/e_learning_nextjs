import { IClassroom } from "../interface/_interfaces";

export default abstract class ClassroomRepository {
  abstract getAll(): Promise<IClassroom[]>;
  abstract create(classroom: IClassroom): Promise<IClassroom>;
}
