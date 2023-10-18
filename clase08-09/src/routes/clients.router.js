import { Router } from "express";
import { clientsManager } from "../managers/clientsManager.js";
const router = Router();

router.get("/", async (req, res) => {
  const response = await clientsManager.findAggregation();
  res.json({ response });
});
export default router;
