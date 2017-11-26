import React, { Component } from "react";
import { connect } from "react-redux";
import ExpenseForm from "./form";
import { editExpense, removeExpense } from "../actions";

class EditExpense extends Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  removeExpense = () => {
    this.props.removeExpense(this.props.expense.id);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button className="btn btn-danger" onClick={this.removeExpense} >Remove</button>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    expense: state.expenses.find(expense => expense.id == props.match.params.id)
  }
}
export default connect(mapStateToProps, {editExpense, removeExpense})(EditExpense);