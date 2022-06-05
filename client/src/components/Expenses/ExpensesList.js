import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.filteredItems.length === 0) {
    return <h1 className="expenses-list__fallback">No Expenses Found.</h1>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredItems.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
