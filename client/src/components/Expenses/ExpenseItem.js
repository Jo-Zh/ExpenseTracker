import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
// import Axios from "axios";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button type="button" onClick={props.deleteHandler}>
          Delete
        </button>
        <button type="button" onClick={props.updateHandler}>
          Update
        </button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
