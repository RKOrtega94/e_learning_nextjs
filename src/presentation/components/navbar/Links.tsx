import Link from "next/link";
import NavLink from "./NavLink";

const links = [
  { path: "/", label: "Home" },
  { path: "/classrooms", label: "Classrooms" },
  { path: "/Tasks", label: "Tasks" },
];

export default function Links() {
  return (
    <div className="flex space-x-4">
      {links.map((link) => (
        <NavLink key={link.path} {...link} />
      ))}
    </div>
  );
}
