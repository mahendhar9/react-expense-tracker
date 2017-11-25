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