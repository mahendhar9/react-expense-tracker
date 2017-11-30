import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

const LoginPage = (props) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expense Tracker</h1>
      <p>Get your expenses under control</p>
      <button className="button" onClick={props.startLogin}>Login with Google</button>
    </div>
  </div>
)

export default connect(null, {startLogin})(LoginPage);
