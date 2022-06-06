import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const Month = props.date.slice(5, 7);
  const Year = props.date.slice(0, 4);
  const Day = props.date.slice(8, 10);
  return (
    <div className="expense-date">
      <div className="expense-date__month">{Month}</div>
      <div className="expense-date__year">{Year}</div>
      <div className="expense-date__day">{Day}</div>
    </div>
  );
};

export default ExpenseDate;
