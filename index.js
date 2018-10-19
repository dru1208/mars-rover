const Processor = require("./modules/processor.js");

const myArguments = process.argv;

if (myArguments.length === 3) {
  const processor = new Processor(process.argv[2]);
  processor.runLineReader();
} else {
  console.log("I'm not sure where the text file is, please try again")
}