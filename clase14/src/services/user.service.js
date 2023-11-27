import { usersManager } from "../persistencia/usersManager.js";
import { hashData } from "../utils.js";
import UserDTO from "../persistencia/DTOs/user.dto.js";

export const findAll = () => {
  const users = usersManager.findAll();
  return users;
};

export const findById = (id) => {
  const user = usersManager.findById(id);
  return user;
};
// { first_Name, last_name, email, password}
// db {full_name, email,password}
export const createOne = (obj) => {
  const hashPassword = hashData(obj.password);
  const userDTO = new UserDTO({ ...obj, password: hashPassword });
  const userCreated = usersManager.createOne(userDTO);
  const response = {
    welcome_string: `Welcome ${userCreated.first_name} ${userCreated.last_name}`,
    email: userCreated.email,
    password: userCreated.password,
  };

  return response;
};
