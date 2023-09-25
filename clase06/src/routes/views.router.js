import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  //res.render("websocket");
  res.render("chat");
});
export default router;
