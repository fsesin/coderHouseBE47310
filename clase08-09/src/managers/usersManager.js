import { usersModel } from "../db/models/users.model.js";

class UsersManager {
  async findOne(obj) {
    const user = await usersModel.findOne(obj).explain("executionStats");
    console.log(user);
    return user;
  }

  async findAll(opt) {
    const { gender, limit, page } = opt;
    const result = await usersModel.paginate({ gender }, { limit, page });
    const info = {
      count: result.totalDocs,
      pages: result.totalPages,
      prev: result.hasPrevPage
        ? `http://localhost:8080/api/users?page=${result.prevPage}`
        : null,
      next: result.hasNextPage
        ? `http://localhost:8080/api/users?page=${result.nextPage}`
        : null,
    };
    return { info, reuslts: result.docs };
  }
}

export const usersManager = new UsersManager();
