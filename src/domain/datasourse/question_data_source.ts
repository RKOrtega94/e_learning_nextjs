import { IQuestion } from "@interface/_interfaces";

export default abstract class QuestionDataSource {
  abstract getAll(questionBankId: string): Promise<IQuestion[]>;
  abstract create(question: IQuestion): Promise<IQuestion>;
}
