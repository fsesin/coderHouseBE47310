import express from "express";
import compression from "express-compression";
import { errorMiddleware } from "./errors/error.middleware.js";
import NotFoundError from "./errors/not-found.error.js";
//import CustomeError from "./errors/not-found.error.js";
import { ErrorMessages } from "./errors/error.enum.js";
import operaciones from "operacionescoderhouse";
const app = express();
//app.use(compression());
app.use(compression({ brotli: { enabled: true, zlib: {} } }));
app.get("/test", (req, res) => {
  let testString = "probando compression con este string, saludos a todos";
  for (let i = 0; i < 100000; i++) {
    testString += "probando compression con este string, saludos a todos";
  }
  res.send(testString);
});

app.get("/users", (req, res) => {
  //throw new Error("User not found");
  //NotFoundError.createError("User");
  //CustomeError.createError(ErrorMessages.USER_NOT_FOUND);
  throw new NotFoundError("User");
});

app.get("/products", (req, res) => {
  //throw new Error("Product not found");
  //NotFoundError.createError("Product");
  CustomeError.createError(ErrorMessages.PRODUCT_NOT_FOUND);
});

app.get("/operaciones", (req, res) => {
  const resultado = operaciones.sumar(10, 15);
  res.send(`El resultado es ${resultado}`);
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log("Escuchando al puerto 8080");
});
