import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/home", (req, res) => {
  console.log("req", req);
  const { email, first_name } = req.session;
  res.render("home", { email, first_name });
});
export default router;
