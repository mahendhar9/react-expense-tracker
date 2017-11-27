import React, {Component} from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount } from "../actions/filters";

class Filters extends Component {
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

  render() {
    return (
      <div>
        <input type="text" value={this.props.filters.text} onChange={this.onTextChange} className="form-control" />

        <select value={this.props.filters.sortBy} onChange={this.onSortChange} className="form-control">
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  { filters: state.filters }
)

export default connect(mapStateToProps, { setTextFilter, sortByDate, sortByAmount})(Filters);