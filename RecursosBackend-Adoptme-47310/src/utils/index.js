import bcrypt from "bcrypt";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

export const createHash = async (password) => {
  const salts = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salts);
};

export const passwordValidation = async (user, password) =>
  bcrypt.compare(password, user.password);

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(dirname(__filename), "..");

export default __dirname;
