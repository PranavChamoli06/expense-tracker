const SummaryCards = ({ expenses }) => {

  const totalExpenses = expenses.reduce(
    (acc, item) => acc + Number(item.amount),
    0
  );

  const highestExpense =
    expenses.length > 0
      ? Math.max(...expenses.map((e) => Number(e.amount)))
      : 0;

  const latestCategory =
    expenses.length > 0
      ? expenses[expenses.length - 1].category
      : "N/A";

  return (
    <div className="summary-grid">

      <div className="summary-card">
        <h3>Total Expenses</h3>
        <p>₹{totalExpenses}</p>
      </div>

      <div className="summary-card">
        <h3>Total Transactions</h3>
        <p>{expenses.length}</p>
      </div>

      <div className="summary-card">
        <h3>Highest Expense</h3>
        <p>₹{highestExpense}</p>
      </div>

      <div className="summary-card">
        <h3>Latest Category</h3>
        <p>{latestCategory}</p>
      </div>

    </div>
  );
};

export default SummaryCards;