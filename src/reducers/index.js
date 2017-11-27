import { combineReducers } from 'redux';
import ExpensesReducer from "./reducer_expenses";
import FiltersReducer from "./reducer_filters";

const rootReducer = combineReducers({
  expenses: ExpensesReducer,
  filters: FiltersReducer
});

export default rootReducer;
