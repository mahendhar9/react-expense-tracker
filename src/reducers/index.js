import { combineReducers } from 'redux';
import ExpensesReducer from "./reducer_expenses";

const rootReducer = combineReducers({
  expenses: ExpensesReducer
});

export default rootReducer;
