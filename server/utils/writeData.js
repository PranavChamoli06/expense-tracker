import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "../data/expenses.json");

const writeData = async (data) => {
  await fs.writeFile(
    filePath,
    JSON.stringify(data, null, 2)
  );
};

export default writeData;