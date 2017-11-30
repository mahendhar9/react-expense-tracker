import uuid from 'uuid';
import database from "../firebase";

export const addExpense = (expense) => {
  return {
    type: 'ADD_EXPENSE',
    expense
  }
}

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { description = "", note = "", amount = 0, createdAt = 0} = expenseData;
    const expense = {
      description,
      note,
      amount,
      createdAt
    };

    database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      })); 
    });
  }
}

export const setExpenses = (expenses) => {
  return {
    type: 'SET_EXPENSES',
    expenses
  }
}

export const startFetchExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
      const expenses = [];
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setExpenses(expenses));
    });
  }
}

export const editExpense = (id, expense) => {
  return {
    type: 'EDIT_EXPENSE',
    id: id,
    expense: expense
  }
}

export const startEditExpense = (id, expense) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database.ref(`users/${uid}/expenses/${id}`).update(expense).then(() => {
      dispatch(editExpense(id, expense));
    });
  }
}

export const removeExpense = (id) => {
  return {
    type: 'REMOVE_EXPENSE',
    id: id
  }
}

export const startRemoveExpense = (id) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      dispatch(removeExpense(id));
    });
  }
}