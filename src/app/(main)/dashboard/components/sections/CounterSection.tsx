import React from "react";
import DashboardCard from "../card/DashboardCard";

export default function CounterSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <DashboardCard className="primary" />
      <DashboardCard className="secondary" />
      <DashboardCard className="tertiary" />
      <DashboardCard className="quaternary" />
    </div>
  );
}
