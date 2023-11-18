import express from "express";
import { __dirname } from "./utils.js";
import handlebars from "express-handlebars";
import "./db/configDB.js";
import viewsRouter from "./routes/views.router.js";
import usersRouter from "./routes/users.router.js";
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";
import sessionsRouter from "./routes/sessions.router.js";
import cookieParser from "cookie-parser";
import MongoStore from "connect-mongo";
import session from "express-session";
import passport from "passport";
import "./passport.js";
import config from "./config.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    store: new MongoStore({
      mongoUrl: config.mongo_uri,
    }),
    secret: config.session_secret,
    cookie: { maxAge: 60000 },
  })
);

// passport
app.use(passport.initialize());
app.use(passport.session());

// handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

// routes
app.use("/", viewsRouter);
app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);
app.use("/api/carts", cartsRouter);
app.use("/api/sessions", sessionsRouter);
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
