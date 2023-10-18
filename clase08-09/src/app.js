import express from "express";
import "./db/config.js";
import studentsRouter from "./routes/students.router.js";
import usersRouter from "./routes/users.router.js";
import coursesRouter from "./routes/courses.router.js";
import clientsRouter from "./routes/clients.router.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/students", studentsRouter);
app.use("/api/users", usersRouter);
app.use("/api/courses", coursesRouter);
app.use("/api/clients", clientsRouter);
app.listen(8080, () => {
  console.log("Conectado al puerto 8080");
});
