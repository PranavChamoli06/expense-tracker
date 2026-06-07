import { useOutletContext } from "react-router-dom";

import Navbar from "../components/Navbar";
import SummaryCards from "../components/SummaryCards";
import ExpenseChart from "../components/ExpenseChart";

const Overview = () => {

  const { expenses } = useOutletContext();

  return (
    <>
      <Navbar />

      <SummaryCards expenses={expenses} />

      <ExpenseChart expenses={expenses} />
    </>
  );
};

export default Overview;