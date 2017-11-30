import React from "react";
import Header from "./header";
import ExpenseList from "./expense_list";
import Filters from "./filters";
import ExpensesSummary from "./expenses_summary";
import "../styles/styles.css";

const Dashboard = () => (
  <div>
    <Header />
    <ExpensesSummary />
    <Filters />
    <ExpenseList />
  </div>
);

export default Dashboard;
