import { IQuestionBank } from "@interface/_interfaces";

export default abstract class GetAllQuestionBankUseCase {
  abstract execute(): Promise<IQuestionBank[]>;
}
