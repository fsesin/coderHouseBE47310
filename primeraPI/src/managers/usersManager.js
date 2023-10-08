import { usersModel } from "../db/models/users.model.js";
import BasicManager from "./basicManager.js";

class UsersManager extends BasicManager {
  constructor() {
    super(usersModel);
  }
}

export const usersManager = new UsersManager();
