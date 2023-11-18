import dotenv from "dotenv";
import program from "./commander.js";

const mode = program.opts().mode;
dotenv.config({
  path:
    mode === "dev"
      ? ".env.development"
      : mode === "test"
      ? ".env.testing"
      : ".env.production",
});

export default {
  mongo_uri: process.env.MONGO_URI,
  port: process.env.PORT,
  github_client_id: process.env.GITHUB_CLIENT_ID,
};
