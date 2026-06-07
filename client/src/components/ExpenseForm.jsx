import { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [formData, setFormData] = useState({
    amount: "",
    category: "",
    date: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddExpense(formData);

    setFormData({
      amount: "",
      category: "",
      date: "",
      note: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Bills">Bills</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
      </select>

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />

      <input
        type="text"
        name="note"
        placeholder="Note"
        value={formData.note}
        onChange={handleChange}
      />

      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;