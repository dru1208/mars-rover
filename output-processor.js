class OutputProcessor {
  constructor(grid) {
    this.grid = grid;
  }

  // method for finding final rover positions from the grid

  findRoverPositions() {
    let roverPositions = this.grid.rovers.map(rover => {
      return rover.generateRoverPositionString();
    })
    this.roverPositionArray = roverPositions
    return this.roverPositionArray;
  }

  // method for displaying rover position strings on console

  displayRoverPositions() {
    this.roverPositionArray.forEach(position => {
      console.log(position);
    })
  }
}

module.exports = OutputProcessor;