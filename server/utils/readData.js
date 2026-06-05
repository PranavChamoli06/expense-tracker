import fs from "fs/promises";

const readData = async () => {
  const data = await fs.readFile("./data/expenses.json", "utf-8");
  return JSON.parse(data);
};

export default readData;