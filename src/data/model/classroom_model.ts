import { IClassroom } from "@interface/_interfaces";

export class ClassroomModel implements IClassroom {
  id: string;
  name: string;
  capacity: number;
  code: string;
  cover: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;

  constructor(
    id: string,
    name: string,
    capacity: number,
    code: string,
    cover: string,
    status: boolean,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date
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
