import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [dateSelected, setDateSelected] = useState("2020");
  const dateSelectHandler = (selectedYear) => {
    setDateSelected(selectedYear);
    console.log(dateSelected);
  };
  const filteredItems = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === dateSelected;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={dateSelected}
        onChangeFilter={dateSelectHandler}
      />
      <ExpensesChart expenses={filteredItems}></ExpensesChart>
      <ExpensesList items={filteredItems} />
    </Card>
  );
};

export default Expenses;
