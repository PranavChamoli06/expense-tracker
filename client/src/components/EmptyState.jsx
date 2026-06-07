import { FaWallet } from "react-icons/fa";

const EmptyState = () => {
  return (
    <div className="empty-state">

      <div className="empty-icon">
        <FaWallet />
      </div>

      <h2>No Expenses Found</h2>

      <p>
        Start adding expenses to track your spending
        and view analytics.
      </p>

    </div>
  );
};

export default EmptyState;