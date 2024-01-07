import DashboardCard from "./components/card/DashboardCard";
import CounterSection from "./components/sections/CounterSection";
import ClassroomSections from "./components/sections/ClassroomSections";
import EvaluationSection from "./components/sections/EvaluationSection";

export default async function DashboardPage() {
  return (
    <>
      <CounterSection />
      <div className="w-full flex flex-col md:flex-row gap-4 my-4">
        <section className="w-full md:w-3/4 sm:w-full">
          <ClassroomSections />
        </section>
        <section className="w-full md:w-1/4 sm:w-full">
          <EvaluationSection />
        </section>
      </div>
    </>
  );
}
