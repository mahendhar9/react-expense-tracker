import React, { Component } from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./expense_list_item";
import selectExpenses from "../selectors/expenses";

class ExpenseList extends Component {
  render() {
    return (
      <div className="content-container">
        <div className="list-header">
          <div className="show-for-mobile">Expenses</div>
          <div className="show-for-desktop">Expense</div>
          <div className="show-for-desktop">Amount</div>
        </div>

        <div className="list-body">
          {
            this.props.expenses.length === 0 ? (
              <div className="list-item list-item--message">
                  <span>No expenses</span>
            </div>
            ) : (
              this.props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} expense={expense} />
              })
            )
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { expenses: selectExpenses(state.expenses, state.filters) }
}

export default connect(mapStateToProps)(ExpenseList);