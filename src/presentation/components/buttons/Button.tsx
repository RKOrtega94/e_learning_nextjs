import style from "./Button.module.css";

interface ButtonProps {
  className?: String;
  onClick?: () => void;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <button className={`btn ${props.className}`}>
      {props.children ?? "Button content"}
    </button>
  );
}
