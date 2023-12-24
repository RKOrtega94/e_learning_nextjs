import { IClassroom } from "@interface/_interfaces";

export default abstract class ICreateClassroomUseCase {
  abstract execute(classroomData: IClassroom): Promise<IClassroom>;
}
