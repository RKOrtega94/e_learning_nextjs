import { IQuestionBank } from "@interface/_interfaces";

export default abstract class QuestionRepository {
  abstract getAll(): Promise<IQuestionBank[]>;
  abstract create(question: IQuestionBank): Promise<IQuestionBank>;
}
