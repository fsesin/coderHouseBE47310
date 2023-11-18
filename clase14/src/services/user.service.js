import { usersManager } from "../persistencia/usersManager.js";
import { hashData } from "../utils.js";

export const findAll = () => {
  const users = usersManager.findAll();
  return users;
};

export const findById = (id) => {
  const user = usersManager.findById(id);
  return user;
};

export const createOne = (obj) => {
  const hashPassword = hashData(obj.password);
  const userCreated = usersManager.createOne({
    ...obj,
    password: hashPassword,
  });
  const response = {
    welcome_string: `Welcome ${userCreated.first_name} ${userCreated.last_name}`,
    email: userCreated.email,
    password: userCreated.password,
  };

  return response;
};
