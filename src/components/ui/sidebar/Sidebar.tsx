import { NavLink } from "@/components";
import Style from "./Sidebar.module.css";
import Link from "next/link";

import { RiHomeSmile2Fill } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { GoTasklist } from "react-icons/go";

const links = [
  {
    path: "/",
    label: "Home",
    icon: <RiHomeSmile2Fill />,
  },
  {
    path: "/classrooms",
    label: "Classrooms",
    icon: <SiGoogleclassroom />,
  },
  {
    path: "/evaluations",
    label: "Evaluations",
    icon: <GoTasklist />,
  },
];

export const Sidebar = () => {
  return (
    <section className={Style["sidebar-layout"]}>
      <div className={Style.sidebar}>
        <div className="py-4">
          <Link href="/" className="text-2xl font-extrabold primary">
            E-Learning
          </Link>
        </div>
        <div className={Style.divider}></div>
        {links.map((link) => (
          <NavLink key={link.path} {...link} />
        ))}
      </div>
    </section>
  );
};
