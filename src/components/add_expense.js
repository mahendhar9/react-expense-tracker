import React, { Component } from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";
import { NavLink } from 'react-router-dom';
import ExpenseForm from "./form";

class AddExpense extends Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    )
  }
}

export default connect(null, { addExpense })(AddExpense);
