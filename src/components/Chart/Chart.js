import React from "react";

import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const ExpenseValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const MaxExpenseValue = Math.max(...ExpenseValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={MaxExpenseValue}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};
export default Chart;
