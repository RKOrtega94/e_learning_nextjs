import { Card } from "./Card";
import Image from "next/image";
import { Classroom } from "@/data/model/_model";

export function ClassroomCard(classroom: Classroom) {
  return (
    <Card className="p-0 w-full h-48 overflow-hidden flex flex-col justify-between border-black border-b-2 border-r-2 hover:border-b-4 hover:border-r-4">
      <span>{classroom.name}</span>
      <div>Description</div>
    </Card>
  );
}
