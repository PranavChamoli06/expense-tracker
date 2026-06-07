const filterExpenses = (
  expenses,
  selectedCategory
) => {
  if (selectedCategory === "All") {
    return expenses;
  }

  return expenses.filter(
    (expense) =>
      expense.category === selectedCategory
  );
};

export default filterExpenses;