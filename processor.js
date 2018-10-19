const fs = require("fs");
const readline = require("readline");

const GridInputProcessor = require("./grid-input-processor.js");
const RoverInputProcessor = require("./rover-input-processor.js");
const Grid = require("./grid.js");
const Rover = require("./rover.js");

class InputProcessor {
  constructor(fileInput) {
    this.linereader = readline.createInterface({
      input: fs.createReadStream(fileInput)
    });
    this.count = 1;
    this.rovers = [];
  }

  // method for finding final rover positions from the grid

  findRoverPositions() {
    let roverPositions = this.grid.rovers.map(rover => {
      return rover.generateRoverPositionString();
    })
    this.roverPositions = roverPositions;
    return roverPositions;
  }

  // method for displaying rover position strings on console

  displayRoverPositions() {
    this.findRoverPositions().forEach(position => {
      console.log(position);
    })
  }

  // method that runs through each line of text file and applies the grid and rover processors to generate
  // new grid and rover instances. once the line reader has completed, rovers complete their movements in
  // order before being displayed on the console

  runLineReader() {
    const parent = this;
    this.currentGridInputProcessor = new GridInputProcessor;
    this.currentRoverInputProcessor = new RoverInputProcessor;

    this.linereader.on('line', function (line) {
      if (parent.count === 1) {

          let gridInfo = parent.currentGridInputProcessor.generateGridInfoObject(line);
          parent.grid = new Grid(gridInfo.x, gridInfo.y);

      } else if (parent.count % 2 === 0) {

          let roverInfo = parent.currentRoverInputProcessor.generateRoverInfoObject(line);
          parent.currentRover = new Rover(roverInfo.x, roverInfo.y, roverInfo.cardinalDirection, parent.grid);

      } else if (parent.count % 2 === 1) {
          let roverInstructions = parent.currentRoverInputProcessor.generateRoverInstructions(line);
          parent.currentRover.addInstructions(roverInstructions);
          parent.grid.addRover(parent.currentRover);
          parent.rovers.push(parent.currentRover);
      }
      parent.count ++

    });

    this.linereader.on('close', function () {
      parent.rovers.forEach(rover => {
        rover.completeMovementInstructions();
      })
      parent.displayRoverPositions();
    })
  }

}

module.exports = InputProcessor;