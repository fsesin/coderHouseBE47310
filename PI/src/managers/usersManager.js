import { usersModel } from "../db/models/users.model.js";
import BasicManager from "./basicManager.js";

class UsersManager extends BasicManager {
  constructor() {
    super(usersModel, "cart");
  }

  async findByEmail(email) {
    return usersModel
      .findOne({ email })
      .populate({ path: "cart", populate: { path: "products.product" } });
  }
}

export const usersManager = new UsersManager();
