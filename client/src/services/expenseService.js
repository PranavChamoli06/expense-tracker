import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/expenses",
});

export const getExpenses = () => API.get("/");

export const addExpense = (data) => API.post("/", data);

export const updateExpense = (id, data) =>
  API.put(`/${id}`, data);

export const deleteExpense = (id) =>
  API.delete(`/${id}`);