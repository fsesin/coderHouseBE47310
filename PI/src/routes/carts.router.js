import { cartsManager } from "../managers/cartsManager.js";
import { Router } from "express";
import { productsManager } from "../managers/productsManager.js";

const router = Router();

router.get("/:idCart", async (req, res) => {
  const { idCart } = req.params;
  try {
    const cart = await cartsManager.findById(idCart);
    res.status(200).json({ message: "Cart found", cart });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newCart = { products: [] };
    const createdCart = await cartsManager.createOne(newCart);
    res.status(200).json({ message: "Cart created", cart: createdCart });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/:idCart/products/:idProduct", async (req, res) => {
  const { idCart, idProduct } = req.params;
  try {
    const cart = await cartsManager.findById(idCart);
    if (!cart) {
      return res.status().json({ message: "Cart not found" });
    }
    const product = await productsManager.findById(idProduct);
    if (!product) {
      return res.status().json({ message: "Product not found" });
    }
    const productIndex = cart.products.findIndex((p) =>
      p.product.equals(idProduct)
    );
    if (productIndex === -1) {
      cart.products.push({ product: idProduct, quantity: 1 });
    } else {
      cart.products[productIndex].quantity++;
    }
    await cart.save();
    res.status(200).json({ message: "Product added" });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
