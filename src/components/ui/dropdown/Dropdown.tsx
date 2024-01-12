"use client";

import { IconButton } from "@/components";
import Style from "./Dropdown.module.css";

interface DropdownProps {
  actionSection: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Dropdown = (props: DropdownProps) => {
  function toggleDropdown() {}
  return (
    <div className={Style["dropdown-container"]}>
      <div className={Style["dropdown-button"]}>
        <IconButton icon={props.actionSection} onClick={toggleDropdown} />
      </div>
      <div className={Style["dropdown-content"]}>Content section</div>
    </div>
  );
};
