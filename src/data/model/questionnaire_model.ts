import { IQuestionnaire } from "@/domain/interface/_interfaces";

export default class QuestionnaireModel implements IQuestionnaire {
  id: string | null;
  name: string;
  description: string;
  status: boolean;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  deletedAt: Date | null;
  classroomId: string;

  constructor({
    id = null,
    name,
    description,
    status,
    createdAt,
    updatedAt,
    deletedAt = null,
    classroomId,
  }: {
    id: string | null;
    name: string;
    description: string;
    status: boolean;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    classroomId: string;
  }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.status = status;
    this.createdAt = createdAt ?? undefined;
    this.updatedAt = updatedAt ?? undefined;
    this.deletedAt = deletedAt;
    this.classroomId = classroomId;
  }

  // questionnaire from data
  static fromData(data: any): QuestionnaireModel {
    return new QuestionnaireModel({
      id: data.id,
      name: data.name,
      description: data.description,
      status: data.status,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      deletedAt: data.deletedAt,
      classroomId: data.classroomId,
    });
  }
}
