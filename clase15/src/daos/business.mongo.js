import { businessModel } from "../models/business.model.js";
import { BasicMongo } from "./basic.mongo.js";

class BusinessMongo extends BasicMongo {
  constructor() {
    super(businessModel);
  }

  async addProduct(id, infoProduct) {
    const business = await businessModel.findById(id);
    business.products.push(infoProduct);
    await business.save();
  }
}

export const businessMongo = new BusinessMongo();
