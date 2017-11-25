import React, { Component } from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions";
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
        <NavLink to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/add-expense" activeClassName="active">Add Expense</NavLink>

        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

export default connect(null, { addExpense })(AddExpense);
