import { Router } from "express";
import { usersManager } from "../UsersManager.js";
import { prueba1,prueba2 } from "../middlewares/auth.middleware.js";
const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await usersManager.getUsers(req.query);
    if (!users.length) {
      res.status(200).json({ message: "No users found" });
    } else {
      res.status(200).json({ message: "Users found", users });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.get("/:idUser", async (req, res) => {
  const { idUser } = req.params;
  console.log('idUser',idUser);
  try {
    const user = await usersManager.getUserById(+idUser);
    if (!user) {
      res.status(400).json({ message: "User not found with the id sent" });
    } else {
      res.status(200).json({ message: "User found", user });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.post("/",async (req, res) => {
  const { first_name, email, password } = req.body;
  if (!first_name || !email || !password) {
    return res.status(400).json({ message: "Some data is missing" });
  }
  try {
    const newUser = await usersManager.createUser(req.body);
    //res.status(200).json({ message: "User created", user: newUser });
    req.user = newUser
    res.redirect(`/api/signupresponse/${newUser.id}`)
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.delete("/:idUser", async (req, res) => {
  const { idUser } = req.params;
  try {
    const response = await usersManager.deleteUser(+idUser);
    if (response === -1) {
      res.status(400).json({ message: "User not found with the id sent" });
    } else {
      res.status(200).json({ message: "User deleted" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.put("/:idUser", async (req, res) => {
  const { idUser } = req.params;
  try {
    const response = await usersManager.updateUser(+idUser, req.body);
    if (response === -1) {
      res.status(400).json({ message: "User not found with the id sent" });
    } else {
      res.status(200).json({ message: "User updated" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

export default router