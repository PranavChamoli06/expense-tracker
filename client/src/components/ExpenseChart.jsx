import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = [
  "#ff6b6b",
  "#4ecdc4",
  "#ffe66d",
  "#5f27cd",
  "#54a0ff",
];

const ExpenseChart = ({ expenses }) => {

  const categoryData = Object.values(
    expenses.reduce((acc, expense) => {

      const category = expense.category;

      if (!acc[category]) {

        acc[category] = {
          name: category,
          value: 0,
        };

      }

      acc[category].value += Number(
        expense.amount
      );

      return acc;

    }, {})
  );

  return (

    <div className="chart-card">

      <h2>Expense Analytics</h2>

      <div className="chart-wrapper">

        <ResponsiveContainer
          width="100%"
          height={400}
        >

          <PieChart>

            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              innerRadius={90}
              outerRadius={120}
              paddingAngle={4}
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              labelLine={false}
            >

              {categoryData.map(
                (entry, index) => (

                  <Cell
                    key={index}
                    fill={
                      COLORS[
                        index % COLORS.length
                      ]
                    }
                  />

                )
              )}

            </Pie>

            <Tooltip
              contentStyle={{
                background:
                  "rgba(255,255,255,0.15)",

                border:
                  "1px solid rgba(255,255,255,0.2)",

                borderRadius: "12px",

                color: "#fff",

                backdropFilter: "blur(12px)",
              }}
            />

            <Legend
                layout="vertical"
                verticalAlign="middle"
                align="right"
                wrapperStyle={{
                color: "#fff",
                fontSize: "16px",
                paddingLeft: "20px",
              }}
            />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default ExpenseChart;