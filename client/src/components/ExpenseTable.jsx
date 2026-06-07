import EmptyState from "./EmptyState";

const ExpenseTable = ({ expenses, onDelete, onEdit }) => {
  if (expenses.length === 0) {
  return <EmptyState />;
}
  return (
    <div className="table-container">
    <table border="1">
      <thead>
        <tr>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
          <th>Note</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>₹{expense.amount}</td>
            <td>{expense.category}</td>
            <td>{expense.date}</td>
            <td>{expense.note}</td>

            <td>

               <button
                  className="edit-btn"
                  onClick={() => onEdit(expense)}
              >
                  Edit
              </button>
              
              <button
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default ExpenseTable;