import { Card } from "@/presentation/components";
import { SiGoogleclassroom } from "react-icons/si";
import { IoAddCircleSharp } from "react-icons/io5";
import { ClassroomCard } from "@/presentation/components";

import { GetAllClassroom } from "@/data/use_cases";
import { ClassroomRepository } from "@/data/repository/_repository";
import { ClassroomDataSource } from "@/data/data_source/_data_source";
import { Classroom } from "@/data/model/_model";

async function getAllClassroom(): Promise<Classroom[]> {
  const getAllClassroom = new GetAllClassroom(
    new ClassroomRepository(new ClassroomDataSource())
  );
  const classrooms = await getAllClassroom.execute();
  return classrooms;
}

export default async function ClassroomSections() {
  const classrooms: Classroom[] = await getAllClassroom();
  return (
    <Card className="flex flex-col gap-4">
      <section className="flex justify-between items-center">
        <h3 className="text-xl font-bold flex items-center link">
          <SiGoogleclassroom className="inline-block mr-2" />
          My Classrooms
        </h3>
        <button className="btn btn-primary">
          Add classroom
          <IoAddCircleSharp className="inline-block ml-2" />
        </button>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {classrooms.map((classroom) => {
          return <ClassroomCard key={classroom.id} {...classroom} />;
        })}
      </section>
    </Card>
  );
}
