const fs = require("fs");
const readline = require("readline");

const GridInputProcessor = require("./grid-input-processor.js");
const RoverInputProcessor = require("./rover-input-processor.js");
const Grid = require("./grid.js");
const Rover = require("./rover.js");

class Processor {
  constructor(fileInput) {
    this.linereader = readline.createInterface({
      input: fs.createReadStream(fileInput)
    });
    this.count = 1;
    this.rovers = [];
  }

  // method for finding final rover positions from the grid, returns an array of rover info strings

  findRoverPositions() {
    const { rovers } = this.grid
    const roverPositions = rovers.map(rover => rover.generateRoverPositionString())
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

    this.currentGridInputProcessor = new GridInputProcessor;
    this.currentRoverInputProcessor = new RoverInputProcessor;

    this.linereader.on('line', (line) => {

      if (this.count === 1) {
          const gridInfo = this.currentGridInputProcessor.generateGridInfoObject(line);
          this.grid = new Grid(gridInfo.x, gridInfo.y);

      } else if (this.count % 2 === 0) {

          const roverInfo = this.currentRoverInputProcessor.generateRoverInfoObject(line);

          const { x, y, cardinalDirection } = roverInfo
          this.currentRover = new Rover(x, y, cardinalDirection, this.grid);

      } else if (this.count % 2 === 1) {

          const roverInstructions = this.currentRoverInputProcessor.generateRoverInstructions(line);
          this.currentRover.addInstructions(roverInstructions);

          if (this.grid.checkRoverPlacementValidity(this.currentRover)) { // check if coordinates are occupied
            this.grid.addRover(this.currentRover);                        // adds rover to grid
          }
          this.rovers.push(this.currentRover);
      }

      this.count ++

    });

    // complete movement instructions after all rovers have been deployed

    this.linereader.on('close', () => {
      // check if last line of input file is empty and adds a rover with empty instruction string
      if (this.count % 2 === 1) {
        this.currentRover.addInstructions([]);
        if (this.grid.checkRoverPlacementValidity(this.currentRover)) {
          this.grid.addRover(this.currentRover);
        }
        this.rovers.push(this.currentRover);
      }

      this.rovers.forEach(rover => {
        rover.completeMovementInstructions();
      })

      this.displayRoverPositions();

    })
  }

}

module.exports = Processor;