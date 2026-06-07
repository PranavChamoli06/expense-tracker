import { useOutletContext } from "react-router-dom";

import ExpenseForm from "../components/ExpenseForm";
import ExpenseTable from "../components/ExpenseTable";

const Expenses = () => {

  const {
    expenses,
    handleAddExpense,
    handleDeleteExpense,
    handleEditExpense,
  } = useOutletContext();

  return (
    <>
      <div className="glass-card">

        <ExpenseForm
          onAddExpense={handleAddExpense}
        />

      </div>

      <ExpenseTable
        expenses={expenses}
        onDelete={handleDeleteExpense}
        onEdit={handleEditExpense}
      />
    </>
  );
};

export default Expenses;