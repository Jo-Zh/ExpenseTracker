import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [fitleredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.item.filter(
    (expense) => expense.date.slice(0, 4) === fitleredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={fitleredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpense} />
        <ExpensesList filteredItems={filteredExpense} />
      </Card>
    </div>
  );
};

export default Expenses;
