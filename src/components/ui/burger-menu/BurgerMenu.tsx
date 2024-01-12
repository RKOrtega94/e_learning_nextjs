import { TiThMenu } from "react-icons/ti";
import Style from "./BurgerMenu.module.css";

export const BurgerMenu = () => {
  return (
    <button className={Style["burger-menu"]}>
      <TiThMenu />
    </button>
  );
};
