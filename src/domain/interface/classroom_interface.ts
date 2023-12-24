export default interface Classroom {
  id: string;
  name: string;
  capacity: number | null;
  code: string;
  cover: string | null;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
