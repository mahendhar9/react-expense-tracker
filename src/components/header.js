import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { startLogout } from "../actions/auth";

const Header = (props) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>React - Expense Tracker</h1>
        </Link>
        <button onClick={props.startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

export default connect(null, {startLogout})(Header);

