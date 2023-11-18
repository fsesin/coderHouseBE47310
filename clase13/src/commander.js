import { program } from "commander";

program
  .option("-m, --mode <mode>", "ambiente a ejecutar", "dev")
  .option("-p, --port <port>", "puerto", 8080)
  .option("-d, --debug", "variable para modo debug", false)
  .parse();

// console.log("options", program.opts());
// console.log("others", program.args);

export default program;
