import React, {Component} from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../actions/filters";

class Filters extends Component {
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }

  render() {
    return (
      <div>
        <input type="text" value={this.props.filters.text} onChange={this.onTextChange} className="form-control" />
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  { filters: state.filters }
)

export default connect(mapStateToProps, {setTextFilter})(Filters);