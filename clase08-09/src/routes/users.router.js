import { Router } from "express";
import { usersManager } from "../managers/usersManager.js";

const router = Router();

// router.get("/", async (req, res) => {
//   const obj = { _id: "652a61c0980db95a15ca7ad2" };
//   const user = await usersManager.findOne(obj);
//   res.json({ user });
// });

router.get("/", async (req, res) => {
  //
  const response = await usersManager.findAll(req.query);

  res.json({ response });
});
export default router;
