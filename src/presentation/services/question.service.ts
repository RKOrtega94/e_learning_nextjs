import { IQuestion } from "@interface/_interfaces";

export default class QuestionService {
  async createQuestion({
    questionBankId,
    question,
  }: {
    questionBankId: string;
    question: IQuestion;
  }) {}

  async getAllQuestions(questionBankId: string) {}
}
