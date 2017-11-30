import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import AppRouter from './routes';
import thunk from "redux-thunk";
import { startFetchExpenses } from "./actions/expenses";
import { firebase } from "./firebase";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
ReactDOM.render(<p>Loading...</p>, document.querySelector('.container'));

store.dispatch(startFetchExpenses()).then(() => {
  ReactDOM.render(jsx, document.querySelector('.container'));
});

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    console.log("Login");
  } else {
    console.log("Log out");
  }
})

