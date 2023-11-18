import { cartsModel } from "../db/models/carts.model.js";
import BasicManager from "./basicManager.js";

class CartsManager extends BasicManager {
  constructor() {
    super(cartsModel, "products.product");
  }
}

export const cartsManager = new CartsManager();
