import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#8b5cf6",
  "#06b6d4",
  "#10b981",
  "#f59e0b",
  "#ef4444",
];

const ExpenseChart = ({ expenses }) => {

  const categoryData = {};

  expenses.forEach((expense) => {

    const category = expense.category;

    if (!categoryData[category]) {
      categoryData[category] = 0;
    }

    categoryData[category] += Number(expense.amount);

  });

  const chartData = Object.entries(categoryData).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  return (
    <div className="chart-container">

      <h2>Expense Analytics</h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <PieChart>

          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            label
          >

            {chartData.map((entry, index) => (

              <Cell
                key={index}
                fill={
                  COLORS[
                    index % COLORS.length
                  ]
                }
              />

            ))}

          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
};

export default ExpenseChart;