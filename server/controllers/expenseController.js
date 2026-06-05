import { v4 as uuidv4 } from "uuid";
import readData from "../utils/readData.js";
import writeData from "../utils/writeData.js";

export const getExpenses = async (req, res) => {
  const expenses = await readData();
  res.json(expenses);
};

export const addExpense = async (req, res) => {
  const expenses = await readData();

  const newExpense = {
    id: uuidv4(),
    ...req.body,
  };

  expenses.push(newExpense);

  await writeData(expenses);

  res.status(201).json(newExpense);
};

export const updateExpense = async (req, res) => {
  const expenses = await readData();

  const updatedExpenses = expenses.map((expense) =>
    expense.id === req.params.id
      ? { ...expense, ...req.body }
      : expense
  );

  await writeData(updatedExpenses);

  res.json({ message: "Expense updated" });
};

export const deleteExpense = async (req, res) => {
  const expenses = await readData();

  const filteredExpenses = expenses.filter(
    (expense) => expense.id !== req.params.id
  );

  await writeData(filteredExpenses);

  res.json({ message: "Expense deleted" });
};