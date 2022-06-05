import ExpenseItem from "./ExpenseItem";
import Axios from "axios";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.filteredItems.length === 0) {
    return <h1 className="expenses-list__fallback">No Expenses Found.</h1>;
  }
  const onUpdateHandler = (id) => {
    const newTitle = prompt("enter new Title");
    const newAmount = prompt("enter newAmount");

    Axios.put(`http://localhost:3001/update`, {
      title: newTitle,
      amount: newAmount,
      _id: id,
    }).then(() => {});
  };

  const onDeleteHandler = (id) => {
    // setdelID(props._id)
    Axios.delete(`http://localhost:3001/deleteItems/${id}`, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("item deleted");
      }
    });
  };

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
            deleHandler={() => onDeleteHandler(expense._id)}
            updateHandler={() => onUpdateHandler(expense._id)}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
