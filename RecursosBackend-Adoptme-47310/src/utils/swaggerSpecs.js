import swaggerJSDOC from "swagger-jsdoc";
import __dirname from "./index.js";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "AdoptMe API",
      version: "1.0.0",
      description: "API para AdoptMe",
    },
  },
  apis: [`${__dirname}/docs/*.yaml`],
};

export const swaggerSetup = swaggerJSDOC(swaggerOptions);
