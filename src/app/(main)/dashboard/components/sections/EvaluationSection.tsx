import { Card } from "@/presentation/components";
import EmptyCard from "@/presentation/components/card/EmptyCard";
import Link from "next/link";
import { IoChevronForwardSharp } from "react-icons/io5";

export default function EvaluationSection() {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">Evaluations</h3>
        <Link
          className="text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline flex items-center"
          href={`/evaluations`}
        >
          See all
          <IoChevronForwardSharp className="inline-block ml-2" />
        </Link>
      </div>
      <EmptyCard message="No evaluations yet." />
    </Card>
  );
}
