"use client";

import Style from "./Breadcrumb.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Breadcrumb = () => {
  const pathname = usePathname();
  const [path, setPath] = useState("");
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (pathname === "/") {
      setPath("Home");
    } else {
      // parse pathname to capitalize first letter
      setPath(pathname.slice(1, pathname.length).replace("-", " "));
    }
  }, [pathname]);

  return (
    <nav className={Style.breadcrumb}>
      <span>/{path}</span>
    </nav>
  );
};
