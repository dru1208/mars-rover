const fs = require("fs");
const readline = require("readline");

const GridInputProcessor = require("./grid-input-processor.js");
const RoverInputProcessor = require("./rover-input-processor.js");

const Grid = require("./grid.js");
const Rover = require("./rover.js");



const lineReader = readline.createInterface({
  input: fs.createReadStream('./input.txt')
});

let count = 1
let grid;
let currentRover;
let currentRoverInputProcessor

lineReader.on('line', function (line) {
  // switch (count) {
  //   case 1:
  //     let gridInputProcessor = new GridInputProcessor;
  //     let gridInfo = gridInputProcessor.generateGridInfoObject(line);
  //     let grid = new Grid(gridInfo.x, gridInfo.y);

  //     console.log(grid, "this is grid");

  //   case (count % 2 === 0):
  //     currentRoverInputProcessor = new RoverInputProcessor;
  //     let roverInfo = currentRoverInputProcessor.generateRoverInfoObject(line);
  //     currentRover = new Rover(roverInfo.x, roverInfo.y, grid);
  //     console.log("new rover started processing");

  //   case (count > 1 && count % 2 === 1):
  //     let roverInstructions = currentRoverInputProcessor.generateRoverInstructions(line);
  //     currentRover.addInstructions();
  //     console.log("new rover finished processing");

  // }

  if (count === 1) {
      let gridInputProcessor = new GridInputProcessor;
      let gridInfo = gridInputProcessor.generateGridInfoObject(line);
      grid = new Grid(gridInfo.x, gridInfo.y);

      console.log(grid, "this is grid");
  } else if (count % 2 === 0) {
      currentRoverInputProcessor = new RoverInputProcessor;
      let roverInfo = currentRoverInputProcessor.generateRoverInfoObject(line);
      currentRover = new Rover(roverInfo.x, roverInfo.y, grid);
      console.log("new rover started processing");
  } else if (count % 2 !== 0) {
      let roverInstructions = currentRoverInputProcessor.generateRoverInstructions(line);
      currentRover.addInstructions();
      console.log("new rover finished processing");
  }
  count ++
});