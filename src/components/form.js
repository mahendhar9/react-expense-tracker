import React, { Component } from "react";

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount/100).toString() : '',
      note: props.expense ? props.expense.note : '',
      // createdAt: props.expense ? props.expense.description : '',
      error: ''
    };
  }

  onDescriptionChange = (e) => {
    this.setState({description: e.target.value});
  }

  onAmountChange = (e) => {
    this.setState({ amount: e.target.value });
  }

  onNoteChange = (e) => {
    this.setState({ note: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    if(!this.state.description || !this.state.amount) {
      this.setState({error: "Please enter description and amount"})
    } else {
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        note: this.state.note
      })
    }
  }

  render() {
    return (
      <div>
        { this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input type="text"
              placeholder="Description"
              className="form-control"
              value={this.state.description}
              onChange={this.onDescriptionChange}
              autoFocus
            />
          </div>
          <div className="form-group">
            <input type="text"
            placeholder="Amount"
            className="form-control"
            value={this.state.amount}
            onChange={this.onAmountChange}
            />
          </div>
          <div className="form-group">
            <textarea
            placeholder="Add a note (optional)"
            className="form-control"
            value={this.state.note}
            onChange={this.onNoteChange}
            >
            </textarea>
          </div>
          <button type="submit"
            className="btn btn-primary"
          >
            Add Expense
          </button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm;