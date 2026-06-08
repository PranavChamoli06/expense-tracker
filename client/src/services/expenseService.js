import axios from "axios";

const API = axios.create({
  baseURL: "https://expense-tracker-production-05a4.up.railway.app/api/expenses",
});

export const getExpenses = () => API.get("/");

export const addExpense = (data) => API.post("/", data);

export const updateExpense = (id, data) =>
  API.put(`/${id}`, data);

export const deleteExpense = (id) =>
  API.delete(`/${id}`);