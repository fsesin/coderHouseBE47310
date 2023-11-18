import { Router } from "express";
import {
  findUser,
  findUserById,
  createUser,
} from "../controllers/users.controller.js";
const router = Router();

router.get("/", findUser);
router.get("/:idUser", findUserById);
router.post("/", createUser);

export default router;
