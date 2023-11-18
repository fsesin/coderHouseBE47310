import passport from "passport";
import { Router } from "express";

const router = Router();

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { successRedirect: "/profile" })
);

export default router;
