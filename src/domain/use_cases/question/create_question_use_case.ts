import { IQuestion } from "@/domain/interface/_interfaces";

export default abstract class CreateQuestionUseCase {
  abstract execute(question: IQuestion): Promise<IQuestion>;
}
