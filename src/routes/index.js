import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../components/dashboard";
import AddExpense from "../components/add_expense";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ Dashboard } exact={ true } />
      <Route path="/add-expense" component={ AddExpense } />
    </Switch>
  </BrowserRouter>
)

export default AppRouter;