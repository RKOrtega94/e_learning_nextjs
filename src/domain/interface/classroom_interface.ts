export default interface Classroom {
  id: string | null;
  name: string;
  capacity: number | null;
  code: string;
  cover: string | null;
  status: boolean;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  deletedAt: Date | null;
}
