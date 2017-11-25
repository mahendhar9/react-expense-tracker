import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = (props) => {
  const expense = props.expense;
  return (
    <div>
      <Link to={`/edit/${expense.id}`}>
        <p>{expense.description}</p>
      </Link>
      <p>{expense.amount}</p>
      <p>{expense.note}</p>
    </div>
  )
}

export default ExpenseListItem;