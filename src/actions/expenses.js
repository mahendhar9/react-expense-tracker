import uuid from 'uuid';

export const addExpense = ({description='', note= '', amount= 0}={}) => {
  return {
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description: description,
      amount: amount,
      note: note
    }
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