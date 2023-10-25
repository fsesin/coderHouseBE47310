import express from "express";
import cookieParser from "cookie-parser";
import handlebars from "express-handlebars";
import { __dirname } from "./utils.js";
import usersRouter from "./routes/users.router.js";
import viewsRouter from "./routes/views.router.js";
import session from "express-session";
import FileStore from "session-file-store";
import mongoStore from "connect-mongo";
import "./db/configDB.js";

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// session file
// const fileStore = FileStore(session);
// app.use(
//   session({
//     secret: "SESSIONSECRETKEY",
//     cookie: {
//       maxAge: 60 * 60 * 1000,
//     },
//     store: new fileStore({
//       path: __dirname + "/sessions",
//     }),
//   })
// );

// session mongo
const URI =
  "mongodb+srv://coderhouse:coderhouse@cluster0.sugvijj.mongodb.net/session10?retryWrites=true&w=majority";
app.use(
  session({
    secret: "SESSIONSECRETKEY",
    cookie: {
      maxAge: 60 * 60 * 1000,
    },
    store: new mongoStore({
      mongoUrl: URI,
    }),
  })
);

// handlebars
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

// routes
app.use("/api/users", usersRouter);
app.use("/", viewsRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
