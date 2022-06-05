import { useState, useEffect } from "react";
import Axios from "axios";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/getItems").then((res) => {
      console.log(typeof res.data[0].date);
      const expenseMonth = parseInt(res.data[0].date.slice(5, 7));
      console.log(expenseMonth);
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
      {/* <div>
        {expenses.map((item) => {
          return (
            <h1 key={item._id}>
              "key"={item._id}
              <br></br>
              title={item.title}
              <br></br>
              amount={item.amount}
              <br></br>
              date={item.date}
            </h1>
          );
        })}
      </div> */}

      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
      {/* <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} /> */}
    </div>
  );
};

export default App;
