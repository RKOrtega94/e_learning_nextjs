import { IQuestionBank } from "@interface/_interfaces";

export default abstract class CreateQuestionUseCase {
  abstract execute(questionBank: IQuestionBank): Promise<IQuestionBank>;
}
