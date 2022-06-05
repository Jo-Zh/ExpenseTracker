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
      alert("USER CREATED");
      setExpenses([...expenses, response.data]);
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
