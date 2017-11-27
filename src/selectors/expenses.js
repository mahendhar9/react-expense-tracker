export default function(expenses, filters) {
  return expenses.filter((expense) => {
    const textMatch = expense.description.toLowerCase().includes(filters.text.toLowerCase());

    return textMatch;
  })
}