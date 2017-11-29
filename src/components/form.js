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
    const amount = e.target.value;
    
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({ amount });
    }
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
      <form onSubmit={this.onSubmit} className="form">
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input type="text"
          placeholder="Description"
          value={this.state.description}
          className="text-input"
          onChange={this.onDescriptionChange}
          autoFocus
        />
        <input type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
          className="text-input"
        />
        <textarea
          placeholder="Add a note (optional)"
          value={this.state.note}
          className="textarea"
          onChange={this.onNoteChange}
        >
        </textarea>
        <SingleDatePicker
          date = {this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <button type="submit" className="button">Save</button>
      </form>
    )
  }
}

export default ExpenseForm;