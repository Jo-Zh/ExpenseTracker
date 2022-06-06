import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button type="button" onClick={() => props.deleteHandler(props._id)}>
          Delete
        </button>
        <button type="button" onClick={() => props.updateHandler(props._id)}>
          Update
        </button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
