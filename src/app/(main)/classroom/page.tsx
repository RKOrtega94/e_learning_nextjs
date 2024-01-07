import { Button } from "@/presentation/components";
import { IoAddCircleSharp } from "react-icons/io5";
import Link from "next/link";

export default async function ClassroomPage() {
  return (
    <>
      <h3 className="text-xl font-bold">
        Hola, <span className="primary">Usuario</span>
      </h3>
      <h6>Aquí podrás administrar tus clases</h6>
      <Link
        href="/classroom/form"
        className="btn btn-primary flex items-center w-fit-content mt-4 max-w-fit"
      >
        <IoAddCircleSharp className="mr-2" />
        Create a new classroom
      </Link>
    </>
  );
}
