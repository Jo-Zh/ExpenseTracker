import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.filteredItems.length === 0) {
    return <h1 className="expenses-list__fallback">No Expenses Found.</h1>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredItems.map((expense) => {
        return (
          <ExpenseItem
            _id={expense._id}
            key={expense._id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            deleteHandler={props.onDeleteHandler}
            updateHandler={props.onUpdateHandler}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
