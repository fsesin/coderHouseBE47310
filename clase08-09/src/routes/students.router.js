import { Router } from "express";
import { studentsManager } from "../managers/studentsManager.js";
const router = Router();

router.get("/", async (req, res) => {
  const students = await studentsManager.findAll();
  res.json({ message: "Students", students });
});

router.get("/:idStudent", async (req, res) => {
  const { idStudent } = req.params;
  const student = await studentsManager.findById(idStudent);
  res.json({ message: "Student", student });
});

router.post("/", async (req, res) => {
  const createdStudent = await studentsManager.createOne(req.body);
  res.json({ message: "Student created", student: createdStudent });
});

router.delete("/:idStudent", async (req, res) => {
  const { idStudent } = req.params;
  const deletedStudent = await studentsManager.deleteOne(idStudent);
  res.json({ message: "Student deleted", student: deletedStudent });
});

export default router;
