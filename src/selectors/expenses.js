import moment from 'moment';

export default function(expenses, filters) {
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt);
    const textMatch = expense.description.toLowerCase().includes(filters.text.toLowerCase());

    const startDateMatch = filters.startDate ? filters.startDate.isSameOrBefore(createdAtMoment, 'day') : true;

    const endDateMatch = filters.endDate ? filters.endDate.isSameOrAfter(createdAtMoment, 'day') : true;

    return textMatch && startDateMatch && endDateMatch;
  }).sort((a, b) => {
    if(filters.sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (filters.sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
}