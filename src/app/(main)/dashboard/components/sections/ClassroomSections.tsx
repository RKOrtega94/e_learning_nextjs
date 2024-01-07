import { Card } from "@/presentation/components";

export default function ClassroomSections() {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">My Classrooms</h3>
        <button className="bg-green-500 dark:bg-green-900 px-4 py-2 rounded-md shadow hover:shadow-md text-sm font-bold">
          Add classroom
        </button>
      </div>
    </Card>
  );
}
