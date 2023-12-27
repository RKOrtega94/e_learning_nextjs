import { IQuestionDataSource } from "@/domain/datasourse/_data_source";
import { Question } from "@model/_model";

export default class QuestionDataSource implements IQuestionDataSource {
  getAll(): Promise<Question[]> {
    throw new Error("Method not implemented.");
  }
  create(question: Question): Promise<Question> {
    throw new Error("Method not implemented.");
  }
}
