import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../components/dashboard";
import AddExpense from "../components/add_expense";
import EditExpense from "../components/edit_expense";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ Dashboard } exact={ true } />
      <Route path="/add-expense" component={ AddExpense } />
      <Route path="/edit/:id" component={ EditExpense } />
    </Switch>
  </BrowserRouter>
)

export default AppRouter;