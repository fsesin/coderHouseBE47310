import ToysFile from "./fileDAO/toysManager.js";
import ToysMem from "./memDAO/toysManager.js";

let toysManager;
const persistencia = process.argv[2];
switch (persistencia) {
  case "MEM":
    toysManager = new ToysMem();
    break;
  case "FILE":
    toysManager = new ToysFile();
    break;
  default:
    break;
}

export default toysManager;
