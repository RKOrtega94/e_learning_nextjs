import { QuestionType } from "@prisma/client";

export default interface Question {
  id: number | null;
  questionType: QuestionType;
  question: string;
  answer: string[];
  options: string[];
  questionBankId: string;
}
