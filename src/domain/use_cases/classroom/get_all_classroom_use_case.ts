import { IClassroom } from "@/domain/interface/_interfaces";

export default abstract class IGetAllClassroomUseCase {
  abstract execute(): Promise<IClassroom[]>;
}
