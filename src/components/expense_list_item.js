import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = (props) => {
  const expense = props.expense;
  return (
    <div>
      <Link to={`/edit/${expense.id}`}>
        <p>{expense.description}</p>
      </Link>
      <p>{numeral((expense.amount)/100).format('$0,0.00')}</p>
      <p>{moment(expense.createdAt).format('MMMM Do, YYYY')}</p>
    </div>
  )
}

export default ExpenseListItem;