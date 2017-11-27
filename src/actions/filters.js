export const setTextFilter = (text='') => (
  {
    type: 'SET_TEXT_FILTER',
    text: text
  }
)

export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});