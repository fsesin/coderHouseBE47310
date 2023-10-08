import express from "express";
import { __dirname } from "./utils.js";
import handlebars from "express-handlebars";
import "./db/configDB.js";
import viewsRouter from "./routes/views.router.js";
import usersRouter from "./routes/users.router.js";
import productsRouter from "./routes/products.router.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

// routes
app.use("/", viewsRouter);
app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
