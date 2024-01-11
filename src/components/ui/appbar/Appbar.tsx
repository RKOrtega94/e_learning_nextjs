import Style from "./Appbar.module.css";
import { Breadcrumb, BurgerMenu } from "@/components";

export const Appbar = () => {
  return (
    <nav className={Style.appbar}>
      <section className="flex gap-2">
        <BurgerMenu />
        <Breadcrumb />
      </section>
      <section className="flex gap-2">
        <span>notifications</span>
        <span>user</span>
      </section>
    </nav>
  );
};
