// const path = require("path");
// const os = require("os");

// let pathObj = path.parse(__filename);

// console.log(pathObj);

// const freeMem = os.freemem();
// const totalMem = os.totalmem();

// const percentMem = (freeMem * 100) / totalMem;

// console.log(`Percentage of Free Memory: ${percentMem.toFixed(2)}%`);

// const fs = require("fs");

// const files = fs.readdirSync("./");

// console.log(files);

// const filesAsync = fs.readdir("./", (err, files) => {
//   if (err) console.log("Error: ", err);
//   else console.log("Result: ", files);
// });

const EventEmitter = require("events");

const Logger = require("./logger");
const logger = new Logger();

// Register a Listener
logger.on("messageLogged", arg => {
  console.log("Listener called", arg);
});
logger.log("message");
