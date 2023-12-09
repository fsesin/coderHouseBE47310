import { Router } from "express";
import { generateUser } from "../faker.js";
const router = Router();

router.get("/", (req, res) => {
  const users = [];
  for (let i = 0; i < 5; i++) {
    const user = generateUser();
    users.push(user);
  }

  res.json(users);
});

export default router;
