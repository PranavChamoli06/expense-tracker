import formatCurrency from "../utils/formatCurrency";

const SummaryCards = ({ expenses, summary }) => {

  const latestCategory =
    expenses.length > 0
      ? expenses[expenses.length - 1].category
      : "N/A";

  return (
    <div className="summary-grid">

      <div className="summary-card">
        <h3>Total Expenses</h3>
        <p>
          {formatCurrency(summary.totalSpent)}
        </p>
      </div>

      <div className="summary-card">
        <h3>Total Transactions</h3>
        <p>{expenses.length}</p>
      </div>

      <div className="summary-card">
        <h3>Highest Expense</h3>
        <p>
          {formatCurrency(summary.highestExpense)}
        </p>
      </div>

      <div className="summary-card">
        <h3>Latest Category</h3>
        <p>{latestCategory}</p>
      </div>

    </div>
  );
};

export default SummaryCards;