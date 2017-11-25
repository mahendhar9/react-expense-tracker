export default function(state=[], action) {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id) {
          return {...expense, ...action.expense}
        } else {
          return expense
        }
      })
    default:
      return state
  }
}