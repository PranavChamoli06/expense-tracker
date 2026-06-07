import { CSVLink } from "react-csv";

const ExportCSV = ({ expenses }) => {
  return (
    <CSVLink
      data={expenses}
      filename="expenses.csv"
      className="csv-link"
    >
      <button>
        Export CSV
      </button>
    </CSVLink>
  );
};

export default ExportCSV;