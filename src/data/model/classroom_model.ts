import { IClassroom } from "@interface/_interfaces";

export default class ClassroomModel implements IClassroom {
  id: string | null;
  name: string;
  capacity: number | null;
  code: string;
  cover: string | null;
  status: boolean;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  deletedAt: Date | null;

  constructor({
    id = null,
    name,
    capacity = null,
    code,
    cover = null,
    status,
    createdAt,
    updatedAt,
    deletedAt = null,
  }: {
    id: string | null;
    name: string;
    capacity: number | null;
    code: string;
    cover: string | null;
    status: boolean;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
  }) {
    this.id = id;
    this.name = name;
    this.capacity = capacity;
    this.code = code;
    this.cover = cover;
    this.status = status;
    this.createdAt = createdAt ?? undefined;
    this.updatedAt = updatedAt ?? undefined;
    this.deletedAt = deletedAt;
  }
}
