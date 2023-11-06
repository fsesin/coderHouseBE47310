import { Router } from "express";
import passport from "passport";
import { usersManager } from "../managers/usersManager.js";
import { generateToken, compareData, hashData } from "../utils.js";
const router = Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userDB = await usersManager.getByEmail(email);

    if (!userDB) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const isValid = await compareData(password, userDB.password);

    if (!isValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = generateToken({
      email,
      first_name: userDB.first_name,
      role: userDB.role,
    });

    res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json({ mesage: `Welcome ${userDB.first_name}`, token });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.post("/signup", async (req, res) => {
  const { password, email, first_name, last_name } = req.body;
  if (!first_name || !last_name || !email || !password) {
    res.status(400).json({ message: "All fields are required" });
  }
  try {
    const userDB = await usersManager.getByEmail(email);

    if (userDB) {
      return res.status(401).json({ message: "User exists" });
    }
    const hashedPassword = await hashData(password);
    const createdUser = await usersManager.createOne({
      ...req.body,
      password: hashedPassword,
    });
    res.status(200).json({ message: "User created", user: createdUser });
  } catch (error) {
    res.status(500).json({ error });
  }
});
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

router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
});
export default router;
