import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import LoginPage from "../components/login_page";
import Dashboard from "../components/dashboard";
import AddExpense from "../components/add_expense";
import EditExpense from "../components/edit_expense";
import PrivateRoute from "./private_route";
import PublicRoute from "./public_route";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path="/" component={ LoginPage } exact={ true } />
      <PrivateRoute path="/dashboard" component={ Dashboard } exact={true} />
      <PrivateRoute path="/add-expense" component={ AddExpense } />
      <PrivateRoute path="/edit/:id" component={ EditExpense } />
    </Switch>
  </Router>
)

export default AppRouter;