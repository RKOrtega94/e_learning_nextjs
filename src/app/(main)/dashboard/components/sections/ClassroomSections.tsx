import { Card } from "@/presentation/components";
import { SiGoogleclassroom } from "react-icons/si";
import { IoAddCircleSharp } from "react-icons/io5";

export default function ClassroomSections() {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold flex items-center">
          <SiGoogleclassroom className="inline-block mr-2" />
          My Classrooms
        </h3>
        <button className="bg-green-500 dark:bg-green-900 px-4 py-2 rounded-md shadow hover:shadow-md text-sm font-bold">
          Add classroom
          <IoAddCircleSharp className="inline-block ml-2" />
        </button>
      </div>
    </Card>
  );
}
