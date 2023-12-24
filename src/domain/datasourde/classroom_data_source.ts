import { IClassroom } from "@interface/_interfaces";

export default abstract class ClassroomDataSource {
  abstract getAllClassrooms(): Promise<IClassroom[]>;
  abstract createClassroom(classroom: IClassroom): Promise<IClassroom>;
}
