import { IQuestionBank } from "@interface/_interfaces";

export default abstract class QuestionBankDataSource {
  abstract getAll(): Promise<IQuestionBank[]>;
  abstract create(question: IQuestionBank): Promise<IQuestionBank>;
}
