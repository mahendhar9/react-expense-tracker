import { combineReducers } from 'redux';
import ExpensesReducer from "./reducer_expenses";
import FiltersReducer from "./reducer_filters";
import AuthReducer from "./reducer_auth";

const rootReducer = combineReducers({
  expenses: ExpensesReducer,
  filters: FiltersReducer,
  auth: AuthReducer
});

export default rootReducer;
