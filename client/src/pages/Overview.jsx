import { useState } from "react";

import { useOutletContext } from "react-router-dom";

import Navbar from "../components/Navbar";
import SummaryCards from "../components/SummaryCards";
import ExpenseChart from "../components/ExpenseChart";
import FilterBar from "../components/FilterBar";
import ExportCSV from "../components/ExportCSV";

import calculateSummary from "../utils/calculateSummary";
import filterExpenses from "../utils/filterExpenses";

const Overview = () => {

  const { expenses } = useOutletContext();

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const filteredExpenses = filterExpenses(
    expenses,
    selectedCategory
  );

  return (
    <>
      <Navbar />

      <div className="top-actions">

         <FilterBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
        />

         <div className="dashboard-actions">
            <ExportCSV expenses={filteredExpenses} />
        </div>

      </div>

      <SummaryCards
        expenses={filteredExpenses}
        summary={calculateSummary(filteredExpenses)}
      />

      <ExpenseChart expenses={filteredExpenses} />
    </>
  );
};

export default Overview;