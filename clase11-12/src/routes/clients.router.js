import { Router } from "express";
import { clientsManager } from "../managers/clientsManager.js";
const router = Router();

router.get("/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const client = await clientsManager.getByUsername(username);
    if (!client) {
      return res.status(400).json({ message: "Client not found" });
    }
    res.status(200).json({ message: "Client found", client });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.delete("/:username", async (req, res) => {
  res.send("Test");
});

router.post("/", async (req, res) => {
  const createdClient = await clientsManager.createOne(req.body);
  res.json({ client: createdClient });
});

router.param("username", (req, res, next, username) => {
  const regex = /^[a-zA-Z]+$/;
  if (!regex.test(username)) {
    return res.status(400).json({ message: "Invalid username format" });
  }
  next();
});
export default router;
