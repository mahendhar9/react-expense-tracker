import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = (props) => {
  const expense = props.expense;
  return (
    <div>
      <Link className="list-item" to={`/edit/${expense.id}`}>
        <div>
          <h3 className="list-item__title">{expense.description}</h3>
          <span className="list-item__sub-title">{moment(expense.createdAt).format('MMMM Do, YYYY')}</span>
        </div>
        <h3 className="list-item__data">{numeral(expense.amount / 100).format('$0,0.00')}</h3>
      </Link>
    </div>
  )
}

export default ExpenseListItem;