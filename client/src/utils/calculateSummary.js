const calculateSummary = (expenses) => {
  const totalSpent = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  const highestExpense =
    expenses.length > 0
      ? Math.max(
          ...expenses.map((expense) =>
            Number(expense.amount)
          )
        )
      : 0;

  const categoryTotals = {};

  expenses.forEach((expense) => {
    const category = expense.category;

    if (!categoryTotals[category]) {
      categoryTotals[category] = 0;
    }

    categoryTotals[category] += Number(expense.amount);
  });

  return {
    totalSpent,
    highestExpense,
    categoryTotals,
  };
};

export default calculateSummary;