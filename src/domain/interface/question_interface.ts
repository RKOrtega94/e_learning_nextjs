export default interface Question {
  id: number | null;
  questionType: string;
  question: string;
  answer: string;
  options: string[];
  questionBankId: string;
}
