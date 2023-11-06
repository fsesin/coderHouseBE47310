import { Router } from "express";
import { usersManager } from "../managers/usersManager.js";
import { hashData, compareData } from "../utils.js";
import { jwtValidation } from "../middlewares/jwt.middleware.js";
import passport from "passport";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const router = Router();

// router.get(
//   "/:idUser",
//   jwtValidation,
//   authMiddleware(["admin", "premium"]),
//   async (req, res) => {
//     const { idUser } = req.params;
//     console.log(req.user);
//     try {
//       const user = await usersManager.getById(idUser);
//       res.status(200).json({ message: "User found", user });
//     } catch (error) {
//       res.status(500).json({ error });
//     }
//   }
// );

// passport

// router.get(
//   "/:idUser",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     const { idUser } = req.params;
//     console.log("req.user", req.user);
//     try {
//       const user = await usersManager.getById(idUser);
//       res.status(200).json({ message: "User found", user });
//     } catch (error) {
//       res.status(500).json({ error });
//     }
//   }
// );

router.post("/", async (req, res) => {
  const { password } = req.body;
  try {
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

export default router;
