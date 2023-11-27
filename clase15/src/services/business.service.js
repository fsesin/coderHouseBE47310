import { businessMongo } from "../daos/business.mongo.js";

class BusinessService {
  async findAll() {
    const response = await businessMongo.getAll();
    return response;
  }

  async findById(id) {
    const response = await businessMongo.getById(id);
    return response;
  }

  async createOne(obj) {
    const response = await businessMongo.createOne(obj);
    return response;
  }

  async updateOne(obj) {
    const { id, ...userInfo } = obj;
    const response = await businessMongo.updateOne(id, userInfo);
    return response;
  }

  async deleteOne(id) {
    const response = await businessMongo.deleteOne(id);
    return response;
  }

  async addProduct(obj) {
    const { id, ...infoProduct } = obj;
    const response = await businessMongo.addProduct(id, infoProduct);
    return response;
  }
}

export const businessService = new BusinessService();
