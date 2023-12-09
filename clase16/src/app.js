import express from "express";
import config from "./config.js";
import messagesRouter from "./routes/messages.router.js";
import viewsRouter from "./routes/views.router.js";
import usersRouter from "./routes/users.router.js";
import handlebars from "express-handlebars";
import { __dirname } from "./utils.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use("/api/messages", messagesRouter);
app.use("/", viewsRouter);
app.use("/api/users", usersRouter);
const PORT = config.port;

app.listen(PORT, () => {
  console.log(`escuchando al puerto ${PORT}`);
});
