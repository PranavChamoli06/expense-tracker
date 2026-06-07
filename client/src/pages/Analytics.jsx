import { useOutletContext } from "react-router-dom";

import ExpenseChart from "../components/ExpenseChart";

const Analytics = () => {

  const { expenses } = useOutletContext();

  return (
    <div>
      <ExpenseChart expenses={expenses} />
    </div>
  );
};

export default Analytics;