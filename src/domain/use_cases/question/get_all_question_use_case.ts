import { IQuestion } from "@interface/_interfaces";

export default abstract class GetAllQuestionUseCase {
  abstract execute(questionBankId: string): Promise<IQuestion[]>;
}
