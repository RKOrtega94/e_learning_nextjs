import Question from "@/domain/interface/question_interface";
import { ICreateQuestionUseCase } from "@/domain/use_cases/_use_cases";

export default class CreateQuestionUseCase implements ICreateQuestionUseCase {
  execute(question: Question): Promise<Question> {
    throw new Error("Method not implemented.");
  }
}
