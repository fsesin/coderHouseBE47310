import express from "express";
import { logger } from "./winston.js";
import cluster from "cluster";
import { cpus } from "os";
const app = express();

if (cluster.isPrimary) {
  console.log(`Este es el proceso principal ${process.pid}`);
  for (let i = 0; i < cpus().length; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker) => {
    logger.information(`Proceso ${worker.process.pid} ha terminado`);
    cluster.fork();
  });
} else {
  app.get("/compleja", (req, res) => {
    let suma = 0;
    for (let i = 0; i < 5e8; i++) {
      suma += i;
    }
    res.send({ suma });
  });
  app.listen(3000, () => {
    //console.log("Server is running on port 3000");
    logger.information(`Server is running on port 3000 ${process.pid}`);
  });
}
// app.get("/", (req, res) => {
//   //console.log("Probando logs");
//   //   logger.info("Probando Info");
//   //   logger.error("Error");
//   //   logger.warn("Warn");
//   //   logger.http("HTTP");
//   //   logger.silly("Silly");
//   //   logger.debug("Debug");
//   //   logger.verbose("Verbose");
//   logger.fatal("Fatal");
//   logger.warning("Warning");
//   logger.information("Information");
//   res.send("Probando winston");
// });

// app.get("/sencilla", (req, res) => {
//   let suma = 0;
//   for (let i = 0; i < 1000000; i++) {
//     suma += i;
//   }
//   res.send({ suma });
// });

// app.get("/compleja", (req, res) => {
//   let suma = 0;
//   for (let i = 0; i < 5e8; i++) {
//     suma += i;
//   }
//   res.send({ suma });
// });
