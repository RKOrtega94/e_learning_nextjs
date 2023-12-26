import { IQuestionBank } from "@/domain/interface/_interfaces";

export default class QuestionBankModel implements IQuestionBank {
  id: string | null;
  name: string;
  description: string;
  status: boolean;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  deletedAt: Date | null;
  classroomId: string;

  constructor(
    id: string | null,
    name: string,
    description: string,
    status: boolean,
    createdAt: Date | undefined,
    updatedAt: Date | undefined,
    deletedAt: Date | null,
    classroomId: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
    this.classroomId = classroomId;
  }

  // from data
  static fromData(data: any): QuestionBankModel {
    return new QuestionBankModel(
      data.id,
      data.name,
      data.description,
      data.status,
      data.createdAt,
      data.updatedAt,
      data.deletedAt,
      data.classroomId
    );
  }
}
