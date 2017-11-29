import React from "react";
import ExpenseList from "./expense_list";
import Filters from "./filters";
import { Link } from 'react-router-dom';
import ExpensesSummary from "./expenses_summary";
import "../styles/styles.css";

const Dashboard = () => (
  <div>
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link className="header__title" to="/">
            <h1>React - Expense Tracker</h1>
          </Link>
        </div>
      </div>
    </header>
    <ExpensesSummary />
    <Filters />
    <ExpenseList />
  </div>
);

export default Dashboard;
