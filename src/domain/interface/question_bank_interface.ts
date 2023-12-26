export default interface IQuestionBank {
  id: string | null;
  questionType: string;
  question: string;
  options: string[];
  answer: string;
  status: boolean;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  questionnaireId: string | null;
}
