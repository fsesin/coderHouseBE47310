import { usersMongo } from "../daos/users.mongo.js";
import { hashData } from "../utils.js";
import { UserNotFoundError } from "./user-not-found.error.js";
class UsersService {
  async findAll() {
    const response = await usersMongo.getAll();
    return response;
  }

  async findById(id) {
    const response = await usersMongo.getById(id);
    if (!response) {
      throw new UserNotFoundError(id);
    }
    return response;
  }

  async findByEmail(email) {
    const response = await usersMongo.getUserByEmail(email);
    return response;
  }

  async createOne(obj) {
    const { password } = obj;
    const hashedPassword = hashData(password);
    const response = await usersMongo.createOne({
      ...obj,
      passowrd: hashedPassword,
    });
    return response;
  }

  async updateOne(obj) {
    const { id, ...userInfo } = obj;
    const response = await usersMongo.updateOne(id, userInfo);
    return response;
  }

  async deleteOne(id) {
    const response = await usersMongo.deleteOne(id);
    return response;
  }
}

export const usersService = new UsersService();
