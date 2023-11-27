import { ordersMongo } from "../daos/orders.mongo.js";

class OrdersService {
  async findAll() {
    const response = await ordersMongo.getAll();
    return response;
  }

  async findById(id) {
    const response = await ordersMongo.getById(id);
    return response;
  }

  async createOne(obj) {
    const response = await ordersMongo.createOne(obj);
    return response;
  }

  async updateOne(obj) {
    const { id, ...userInfo } = obj;
    const response = await ordersMongo.updateOne(id, userInfo);
    return response;
  }

  async deleteOne(id) {
    const response = await ordersMongo.deleteOne(id);
    return response;
  }
}

export const ordersService = new OrdersService();
