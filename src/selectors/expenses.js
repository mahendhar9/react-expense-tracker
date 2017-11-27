export default function(expenses, filters) {
  return expenses.filter((expense) => {
    const textMatch = expense.description.toLowerCase().includes(filters.text.toLowerCase());

    return textMatch;
  }).sort((a, b) => {
    if(filters.sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (filters.sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
}