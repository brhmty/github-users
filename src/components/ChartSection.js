import React from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
//InjectedIn--Dashboard.js

function ChartSection() {
  return (
    <div className="flex justify-between max-sm:flex-col">
      <PieChart />
      <BarChart />
    </div>
  );
}

export default ChartSection;
