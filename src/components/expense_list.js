import React, { Component } from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./expense_list_item";
import selectExpenses from "../selectors/expenses";

class ExpenseList extends Component {
  render() {
    <h1>Expenses</h1>
    if (this.props.expenses.length === 0) {
      return <p> No expenses </p>
    }
    return (
      <div>
        {
          this.props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} expense={expense} />
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { expenses: selectExpenses(state.expenses, state.filters) }
}

export default connect(mapStateToProps)(ExpenseList);