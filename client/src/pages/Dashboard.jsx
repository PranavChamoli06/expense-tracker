import { useEffect, useState } from "react";

import {
  Outlet,
  NavLink,
} from "react-router-dom";

import {
  FaChartPie,
  FaWallet,
  FaCog,
} from "react-icons/fa";

import { MdDashboard } from "react-icons/md";

import {
  getExpenses,
  addExpense,
  deleteExpense,
} from "../services/expenseService";

import EditExpenseModal from "../components/EditExpenseModal";

import { updateExpense } from "../services/expenseService";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [selectedExpense, setSelectedExpense] =
    useState(null);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const fetchExpenses = async () => {
    try {
      const res = await getExpenses();
      setExpenses(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleAddExpense = async (data) => {
    try {
      await addExpense(data);
      fetchExpenses();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteExpense = async (id) => {
    try {
      await deleteExpense(id);
      fetchExpenses();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditExpense = (expense) => {

    setSelectedExpense(expense);

    setIsModalOpen(true);
  };

  const handleUpdateExpense = async (
    id,
    updatedData
  ) => {

    try {

      await updateExpense(id, updatedData);

      fetchExpenses();

      setIsModalOpen(false);

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div className="app-layout">

      <aside className="sidebar">

        <div className="sidebar-logo">
          <div className="logo-icon">
            <FaWallet />
          </div>

          <h2>Expense Tracker</h2>
        </div>

        <ul>

          <li>
            <NavLink to="/">
              <MdDashboard className="sidebar-icon" />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/expenses">
              <FaWallet className="sidebar-icon" />
              <span>Expenses</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/analytics">
              <FaChartPie className="sidebar-icon" />
              <span>Analytics</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/settings">
              <FaCog className="sidebar-icon" />
              <span>Settings</span>
            </NavLink>
          </li>

        </ul>

      </aside>

      <main className="main-content">

        <Outlet
          context={{
            expenses,
            handleAddExpense,
            handleDeleteExpense,
            handleEditExpense,
          }}
        />

      {isModalOpen && (

          <EditExpenseModal
          expense={selectedExpense}
          onClose={() => setIsModalOpen(false)}
          onUpdate={handleUpdateExpense}
        />

      )}

      </main>

    </div>
  );
};

export default Dashboard;