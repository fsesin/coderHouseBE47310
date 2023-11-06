import { dirname } from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const __dirname = dirname(fileURLToPath(import.meta.url));
const JWT_SECRET = "jwtSECRET";
// bcrypt
export const hashData = async (data) => {
  return bcrypt.hash(data, 10);
};

export const compareData = async (data, hashedData) => {
  return bcrypt.compare(data, hashedData);
};

export const generateToken = (user) => {
  const token = jwt.sign(user, JWT_SECRET, { expiresIn: 300 });
  return token;
};
