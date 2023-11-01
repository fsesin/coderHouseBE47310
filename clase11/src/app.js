import express from "express";
import usersRouter from "./routes/users.router.js";
import "./db/dbConfig.js";
import mongoStore from "connect-mongo";
import session from "express-session";
import cookieParser from "cookie-parser";
import passport from "passport";
import "./passport.js";
import { __dirname } from "./utils.js";
import handlebars from "express-handlebars";
import viewsRouter from "./routes/views.router.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

//session
app.use(
  session({
    store: new mongoStore({
      mongoUrl:
        "mongodb+srv://coderhouse:coderhouse@cluster0.sugvijj.mongodb.net/47310clase11?retryWrites=true&w=majority",
    }),
    secret: "SESSION_KEY",
    cookie: { maxAge: 60000 },
  })
);

// passport
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use("/api/users", usersRouter);
app.use("/", viewsRouter);

app.listen(8080, () => {
  console.log("Escuchando al puerto 8080");
});
