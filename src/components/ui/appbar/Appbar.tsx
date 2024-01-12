import Style from "./Appbar.module.css";
import { BurgerMenu } from "@/components";
import { Dropdown } from "../dropdown/Dropdown";

import { CgProfile } from "react-icons/cg";
import { IoNotificationsSharp } from "react-icons/io5";

export const Appbar = () => {
  return (
    <nav className={Style.appbar}>
      <section className="flex gap-2">
        <BurgerMenu />
        {/* <Breadcrumb /> */}
      </section>
      <section className="flex gap-2">
        <Dropdown actionSection={<IoNotificationsSharp className="w-8 h-8" />}>
          Contenido
        </Dropdown>
        <Dropdown actionSection={<CgProfile className="w-8 h-8" />}>
          Contenido
        </Dropdown>
      </section>
    </nav>
  );
};
