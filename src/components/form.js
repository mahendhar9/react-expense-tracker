import React, { Component } from "react";
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount/100).toString() : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
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

  onDateChange = (createdAt) => {
    if(createdAt) {
      this.setState({createdAt: createdAt});
    }
  }

  onFocusChange = ({focused}) => {
    this.setState({calendarFocused: focused});
  }

  onSubmit = (e) => {
    e.preventDefault();

    if(!this.state.description || !this.state.amount) {
      this.setState({error: "Please enter description and amount"})
    } else {
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf()
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
          <SingleDatePicker
            date = {this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
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