import React from "react";
import ExpenseList from "./expense_list";
import Filters from "./filters";
import { NavLink } from 'react-router-dom';

const Dashboard = () => (
  <div>
    <NavLink to="/" activeClassName="active">Home</NavLink>
    <NavLink to="/add-expense" activeClassName="active">Add Expense</NavLink>
    <Filters />
    <ExpenseList />
  </div>
);

export default Dashboard;
