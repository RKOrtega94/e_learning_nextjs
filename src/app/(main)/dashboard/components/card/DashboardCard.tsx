import { Card } from "@/presentation/components";
import style from "./dashboard-card.module.css";

interface DashboardCardProps {
  // check className only accept string "primary", "secondary", "tertiary", "quaternary"
  className: "primary" | "secondary" | "tertiary" | "quaternary";
}

export default function DashboardCard(props: DashboardCardProps) {
  function styleClass() {
    switch (props.className) {
      case "primary":
        return style.primary;
      case "secondary":
        return style.secondary;
      case "tertiary":
        return style.tertiary;
      case "quaternary":
        return style.quaternary;
      default:
        return "";
    }
  }

  return (
    <Card className={`${styleClass()} flex`}>
      <div>icon</div>
      <div>Contenido</div>
    </Card>
  );
}
