import bcrypt from "bcrypt";

export const hashData = (data) => {
  return bcrypt.hashSync(data, 10);
};
