import React from "react";

const ExpenseListItem = (props) => {
  const expense = props.expense;
  return (
    <div>
      <p>{expense.description}</p>
      <p>{expense.amount}</p>
      <p>{expense.note}</p>
    </div>
  )
}

export default ExpenseListItem;