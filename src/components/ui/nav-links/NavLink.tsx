"use client";

import Link from "next/link";
import Style from "./NavLink.module.css";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  path: String;
  label: String;
  icon?: React.ReactNode;
}

export const NavLink = ({ path, label, icon }: NavLinkProps) => {
  const pathName = usePathname();

  return (
    <Link
      href={`${path}`}
      className={`${Style["nav-link"]} ${path === pathName && Style.active}`}
    >
      <span>{icon}</span>
      <span className={`${pathName === path && "font-bold"}`}>{label}</span>
    </Link>
  );
};
