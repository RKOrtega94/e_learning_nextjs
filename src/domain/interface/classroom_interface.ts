export default interface Classroom {
  id: string;
  name: string;
  capacity: number;
  code: string;
  cover: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
