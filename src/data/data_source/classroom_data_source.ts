import { IClassroomDataSource } from "@/domain/datasourse/_data_source";
import { PrismaClient } from "@prisma/client";
import { Classroom } from "@model/_model";

export default class ClassroomDataSource implements IClassroomDataSource {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAllClassrooms(): Promise<Classroom[]> {
    const classrooms: Classroom[] = [];
    const data = await this.prisma.classroom.findMany();

    data.forEach((classroom) => classrooms.push(Classroom.fromData(classroom)));

    return classrooms;
  }

  async createClassroom(classroom: Classroom): Promise<Classroom> {
    let newClassroom = await this.prisma.classroom.create({
      data: {
        name: classroom.name,
        capacity: classroom.capacity,
        code: classroom.code,
        cover: classroom.cover,
        status: classroom.status,
      },
    });

    return Classroom.fromData(newClassroom);
  }
}
