import React, { Component } from "react";
import { connect } from "react-redux";
import ExpenseForm from "./form";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

class EditExpense extends Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  removeExpense = () => {
    this.props.startRemoveExpense(this.props.expense.id);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
          <button className="button button--secondary" onClick={this.removeExpense} >Remove</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  }
}
export default connect(mapStateToProps, { startEditExpense, startRemoveExpense})(EditExpense);