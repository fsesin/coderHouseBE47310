import { Router } from "express";
import { productsManager } from "../managers/productsManager.js";
const router = Router();

router.post("/", async (req, res) => {
  const { name, price, stock } = req.body;
  if (!name || !price) {
    return res.status(400).json({ message: "Name and price are required" });
  }
  if (!stock) {
    delete req.body.stock;
  }
  try {
    const createdProduct = await productsManager.createOne(req.body);
    res
      .status(200)
      .json({ message: "Product created", product: createdProduct });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const products = await productsManager.findAllProducts(req.query);
  res.json({ products });
});

export default router;
