import express from "express";
import config from "./config/config.js";
import "./config/dbConfig.js";
import usersRouter from "./routes/users.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", usersRouter);

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});
