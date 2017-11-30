import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import AppRouter, { history } from './routes';
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

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.querySelector('.container'));
    hasRendered = true;
  } 
}

ReactDOM.render(<p>Loading...</p>, document.querySelector('.container'));

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(startFetchExpenses()).then(() => {
      renderApp();
      if(history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    renderApp();
    history.push('/');
  }
})

