import React, { Component } from "react";
import { connect } from "react-redux";
import ExpenseForm from "./form";
import { editExpense } from "../actions";

class EditExpense extends Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    expense: state.expenses.find(expense => expense.id == props.match.params.id)
  }
}
export default connect(mapStateToProps, {editExpense})(EditExpense);