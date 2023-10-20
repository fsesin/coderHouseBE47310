import { productsModel } from "../db/models/products.model.js";
import BasicManager from "./basicManager.js";

class ProductsManager extends BasicManager {
  constructor() {
    super(productsModel);
  }

  async findAllProducts(obj) {
    console.log("obj", obj);
    const { limit = 10, page = 1, sort: sortPrice, ...queryFilter } = obj;
    console.log("sortPrice", sortPrice);
    const response = await productsModel.paginate(queryFilter, {
      limit,
      page,
      sort: { price: sortPrice === "asc" ? 1 : -1 },
      lean: true,
    });
    return response;
  }
}

export const productsManager = new ProductsManager();
