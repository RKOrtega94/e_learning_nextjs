import { IClassroom } from "@interface/_interfaces";

export default class ClassroomModel implements IClassroom {
  id: string;
  name: string;
  capacity: number | null;
  code: string;
  cover: string | null;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;

  constructor(
    id: string,
    name: string,
    capacity: number | null,
    code: string,
    cover: string | null,
    status: boolean,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null
  ) {
    this.id = id;
    this.name = name;
    this.capacity = capacity;
    this.code = code;
    this.cover = cover;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }
}
