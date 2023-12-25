export default interface Questionnaire {
  id: string | null;
  name: string;
  description: string;
  status: boolean;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  deletedAt: Date | null;
  classroomId: string;
}
