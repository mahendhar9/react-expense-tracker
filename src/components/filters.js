import React, {Component} from "react";
import { connect } from "react-redux";
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../actions/filters";

class Filters extends Component {
  state = {
    calendarFocused: null
  }
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }
  onSortChange = (e) => {
    if(e.target.value === 'date') {
      this.props.sortByDate();
    } else if(e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  }
  onDatesChange = ({startDate, endDate}) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }
  onFocusChange = (calendarFocused) => {
    this.setState({calendarFocused});
  }

  render() {
    return (
      <div>
        <input type="text" value={this.props.filters.text} onChange={this.onTextChange} className="form-control" />

        <select value={this.props.filters.sortBy} onChange={this.onSortChange} className="form-control">
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <DateRangePicker 
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  { filters: state.filters }
)

export default connect(mapStateToProps, { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate})(Filters);