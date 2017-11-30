import uuid from 'uuid';
import database from "../firebase";

export const addExpense = (expense) => {
  return {
    type: 'ADD_EXPENSE',
    expense
  }
}

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const { description = "", note = "", amount = 0, createdAt = 0} = expenseData;
    const expense = {
      description,
      note,
      amount,
      createdAt
    };

    database.ref('expenses').push(expense).then((ref) => {
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
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {
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

export const removeExpense = (id) => {
  return {
    type: 'REMOVE_EXPENSE',
    id: id
  }
}

export const startRemoveExpense = (id) => {
  return (dispatch) => {
    database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense(id));
    });
  }
}