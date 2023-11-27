import { ordersModel } from "../models/orders.model.js";
import { BasicMongo } from "./basic.mongo.js";

class OrdersMongo extends BasicMongo {
  constructor() {
    super(ordersModel);
  }
}

export const ordersMongo = new OrdersMongo();
