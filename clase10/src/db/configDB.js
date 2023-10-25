import mongoose from "mongoose";

const URI =
  "mongodb+srv://coderhouse:coderhouse@cluster0.sugvijj.mongodb.net/session10?retryWrites=true&w=majority";
mongoose
  .connect(URI)
  .then(() => console.log("Conectado a la db"))
  .catch((error) => console.log(error));
