import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [editing, SetEditing] = useState(false);
  const colseEditing = () => {
    SetEditing(false);
  };
  const editingHandler = () => {
    SetEditing(true);
  };

  return (
    <div className="new-expense">
      {!editing && <button onClick={editingHandler}>Add new Expense </button>}
      {editing && (
        <ExpenseForm
          onSaveExpenseData={props.onAddExpense}
          closeWindow={colseEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
