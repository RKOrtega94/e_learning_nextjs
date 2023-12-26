import IQuestionBank from "./../interface/question_bank_interface";

export default abstract class QuestionRepository {
  abstract getAll(): Promise<IQuestionBank[]>;
  abstract create(question: IQuestionBank): Promise<IQuestionBank>;
}
