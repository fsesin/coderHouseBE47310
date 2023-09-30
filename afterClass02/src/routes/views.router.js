import { Router } from "express";
import { productsManager } from "../products.manager.js";
const router = Router();

router.get("/home", async (req, res) => {
  const products = await productsManager.getProducts();
  res.render("home", { products });
});

router.get("/realtime", async (req, res) => {
  const products = await productsManager.getProducts();
  res.render("realTimeProducts", { products });
});

export default router;
