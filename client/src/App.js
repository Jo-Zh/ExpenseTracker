import { useState, useEffect } from "react";
import Axios from "axios";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getItems").then((res) => {
      setExpenses(res.data);
    });
  }, []);

  const addExpenseHandler = (expense) => {
    const { title, amount, date } = expense;
    Axios.post("http://localhost:3001/createItems", {
      title,
      amount,
      date,
    }).then((response) => {
      const mydata = response.data;
      setExpenses([...expenses, mydata]);
      console.log(response.data._id);
    });
  };

  const onUpdateHandler = (id) => {
    const [prevItem] = expenses.filter((item) => {
      return item._id === id;
    });

    const newTitle_1 = prompt("enter new Title");
    const newAmount_1 = prompt("enter newAmount");
    console.log(Number(newAmount_1));
    const newTitle = newTitle_1 ? newTitle_1 : prevItem.title;
    let newAmount = 0;
    if (isNaN(Number(newAmount_1))) {
      newAmount = prevItem.amount;
      alert("Amount input need a number!");
    } else if (!newAmount_1) {
      newAmount = prevItem.amount;
    } else {
      newAmount = Number(newAmount_1);
    }

    Axios.put(`http://localhost:3001/update`, {
      title: newTitle,
      amount: newAmount,
      _id: id,
    }).then(() => {
      setExpenses(
        expenses.map((item) => {
          return item._id === id
            ? {
                _id: id,
                title: newTitle,
                amount: newAmount,
                date: item.date,
              }
            : item;
        })
      );
    });
  };

  const onDeleteHandler = (id) => {
    Axios.delete(`http://localhost:3001/deleteItems/${id}`).then(() => {
      setExpenses(
        expenses.filter((item) => {
          return item._id != id;
        })
      );
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        item={expenses}
        onDeleteHandler={onDeleteHandler}
        onUpdateHandler={onUpdateHandler}
      />
    </div>
  );
};

export default App;
