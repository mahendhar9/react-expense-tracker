import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import totalOfExpenses from '../selectors/expenses-total';

const ExpensesSummary = ({count, total}) => {
  const expenseWord = count === 1 ? 'expense' : 'expenses'
  const formatTotal = numeral(total/100).format('$0,0.00');
  return (
    <div>
      <h1>Viewing {count} {expenseWord} totalling {formatTotal} </h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)

  return {
    count: visibleExpenses.length,
    total: totalOfExpenses(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary);