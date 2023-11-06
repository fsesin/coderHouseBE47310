import { clientsModel } from "../db/models/clients.model.js";

class ClientsManager {
  async getByUsername(username) {
    const response = await clientsModel.findOne({ username });
    return response;
  }
  async createOne(obj) {
    const response = await clientsModel.create(obj);
    return response;
  }
}

export const clientsManager = new ClientsManager();
