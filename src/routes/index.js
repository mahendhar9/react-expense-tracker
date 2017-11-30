import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import LoginPage from "../components/login_page";
import Dashboard from "../components/dashboard";
import AddExpense from "../components/add_expense";
import EditExpense from "../components/edit_expense";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={ LoginPage } exact={ true } />
      <Route path="/dashboard" component={ Dashboard } exact={true} />
      <Route path="/add-expense" component={ AddExpense } />
      <Route path="/edit/:id" component={ EditExpense } />
    </Switch>
  </Router>
)

export default AppRouter;