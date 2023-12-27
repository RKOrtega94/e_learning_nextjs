import { QUESTION_TYPES } from "@/data/enums/_enums";

export default interface Question {
  id: number | null;
  questionType: QUESTION_TYPES;
  question: string;
  answer: string[];
  options: string[];
  questionBankId: string;
}
