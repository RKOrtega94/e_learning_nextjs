import Link from "next/link";
import NavLink from "./NavLink";

const links = [
  { path: "/dashboard", label: "Home" },
  { path: "/classroom", label: "Classrooms" },
  { path: "/chat", label: "Chat" },
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
