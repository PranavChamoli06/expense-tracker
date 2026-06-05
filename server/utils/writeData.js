import fs from "fs/promises";

const writeData = async (data) => {
  await fs.writeFile(
    "./data/expenses.json",
    JSON.stringify(data, null, 2)
  );
};

export default writeData;