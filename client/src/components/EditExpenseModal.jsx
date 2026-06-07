import { useState, useEffect } from "react";

const EditExpenseModal = ({
  expense,
  onClose,
  onUpdate,
}) => {

  const [formData, setFormData] = useState({
    amount: "",
    category: "",
    date: "",
    note: "",
  });

  useEffect(() => {

    if (expense) {
      setFormData(expense);
    }

  }, [expense]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    onUpdate(expense.id, formData);

  };

  return (

    <div className="modal-overlay">

      <div className="modal-content">

        <h2>Edit Expense</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Amount"
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Food">Food</option>
            <option value="Transport">
              Transport
            </option>
            <option value="Bills">Bills</option>
            <option value="Entertainment">
              Entertainment
            </option>
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
            value={formData.note}
            onChange={handleChange}
            placeholder="Note"
          />

          <div className="modal-buttons">

            <button type="submit">
              Save Changes
            </button>

            <button
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EditExpenseModal;