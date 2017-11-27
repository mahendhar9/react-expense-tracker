const filtersDefaultState = {
  text: '',
  sortBy: 'date'
}

export default function (state = filtersDefaultState, action)  {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {...state, text: action.text};
    case 'SORT_BY_DATE':
      return {...state, sortBy: 'date'}
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' }
    default:
      return state;
  } 
}