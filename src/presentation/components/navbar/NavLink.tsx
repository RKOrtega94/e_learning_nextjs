"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import style from "./link.module.css";

interface NavLinkProps {
  path: string;
  label: string;
}

export default function NavLink({ path, label }: NavLinkProps) {
  const currentPath = usePathname();

  return (
    <Link
      href={path}
      className={`${style.link} ${
        currentPath === path && style["active-link"]
      }`}
    >
      {label}
    </Link>
  );
}
