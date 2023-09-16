import { Router } from "express";
import { usersManager } from "../UsersManager.js";
const router = Router();

router.get("/allusers", async (req, res) => {
  const users = await usersManager.getUsers({});
  res.render("allUsers", { users, style:'list.css' });
});
router.get("/vista2", (req, res) => {
  res.render("vista2");
});

router.get("/", (req, res) => {
  res.render("signup",{style:'signup.css'});
});

router.get("/signupresponse/:idUser", async (req, res) => {
  const { idUser } = req.params;
  const user = await usersManager.getUserById(+idUser);
  res.render("signupresponse", { user });
});
export default router;
