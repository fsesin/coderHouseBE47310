import { Router } from "express";
import { coursesManager } from "../managers/coursesManager.js";
const router = Router();

router.get("/:idCourse", async (req, res) => {
  const { idCourse } = req.params;
  const course = await coursesManager.findById(idCourse);
  res.json({ course });
});

router.post("/", async (req, res) => {
  const course = await coursesManager.createOne(req.body);
  res.json({ course });
});
export default router;
