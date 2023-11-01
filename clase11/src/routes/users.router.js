import { Router } from "express";
import { usersManager } from "../managers/usersManager.js";
import { hashData, compareData } from "../utils.js";
import passport from "passport";
const router = Router();

// router.post("/", async (req, res) => {
//   const { password } = req.body;
//   try {
//     const hashedPassword = await hashData(password);
//     const createdUser = await usersManager.createOne({
//       ...req.body,
//       password: hashedPassword,
//     });
//     res.status(200).json({ message: "User created", user: createdUser });
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// });

// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const userDB = await usersManager.getByEmail(email);
//     if (!userDB) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }
//     const isValid = await compareData(password, userDB.password);
//     if (!isValid) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }
//     res.status(200).json({ mesage: `Welcome ${userDB.first_name}` });
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// });

// signup - login - passport

// router.post(
//   "/signup",
//   passport.authenticate("signup", {
//     successRedirect: "/home",
//     failureRedirect: "/error",
//   })
// );

// router.post(
//   "/login",
//   passport.authenticate("login", {
//     successRedirect: "/home",
//     failureRedirect: "/error",
//   })
// );

// GITHUB

router.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/github",
  passport.authenticate("github", {
    failureRedirect: "/error",
  }),
  (req, res) => {
    req.session.user = req.user;
    res.redirect("/home");
  }
);

router.get("/:idUser", async (req, res) => {
  const { idUser } = req.params;
  try {
    const user = await usersManager.getById(idUser);
    res.status(200).json({ message: "User found", user });
  } catch (error) {
    res.status(500).json({ error });
  }
});
export default router;
