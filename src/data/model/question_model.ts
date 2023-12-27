import { IQuestion } from "@interface/_interfaces";
import { QUESTION_TYPES } from "../enums/question_type_enum";

export default class Question implements IQuestion {
  id: number | null;
  questionType: QUESTION_TYPES;
  question: string;
  answer: string[];
  options: string[];
  questionBankId: string;

  constructor(
    id: number | null,
    questionType: QUESTION_TYPES,
    question: string,
    answer: string[],
    options: string[],
    questionBankId: string
  ) {
    this.id = id;
    this.questionType = questionType;
    this.question = question;
    this.answer = answer;
    this.options = options;
    this.questionBankId = questionBankId;
  }

  // from data
  static fromData(data: any): Question {
    return new Question(
      data.id,
      data.questionType,
      data.question,
      data.answer,
      data.options,
      data.questionBankId
    );
  }
}
