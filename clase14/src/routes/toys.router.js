import { Router } from "express";
import {
  findToys,
  findToyById,
  createToy,
} from "../controllers/toys.controller.js";

const router = Router();

router.get("/", findToys);
router.get("/:idToy", findToyById);
router.post("/", createToy);

export default router;
