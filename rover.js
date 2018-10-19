class Rover {
  constructor(x_value, y_value, cardinalDirection, grid) {
    this.coordinates = {x: x_value, y: y_value};
    this.cardinalDirection = cardinalDirection;
    this.grid = grid;
  }

  // method for adding rover instructions

  addInstructions(instructions) {
    this.instructions = instructions;
  }

  // methods for handling instructions L and R to rotate the rover's orientation

  rotateLeft() {

    switch (this.cardinalDirection) {

      case "N":
        this.cardinalDirection = "W";
        break;

      case "W":
        this.cardinalDirection = "S";
        break;

      case "S":
        this.cardinalDirection = "E";
        break;

      case "E":
        this.cardinalDirection = "N";
        break;
    }
  }

  rotateRight() {

    switch (this.cardinalDirection) {

      case "N":
        this.cardinalDirection = "E";
        break;

      case "E":
        this.cardinalDirection = "S";
        break;

      case "S":
        this.cardinalDirection = "W";
        break;

      case "W":
        this.cardinalDirection = "N";
        break;
    }
  }

  // method for moving forward one space
  // accounts for conditionals where moving forward would bring the rover outside the grid

  moveForward() {

    switch (this.cardinalDirection) {

      case "N":
        if (this.coordinates.y !== this.grid.y) {
          this.coordinates = {x: this.coordinates.x, y: this.coordinates.y + 1}
        }
        break;

      case "S":
        if (this.coordinates.y !== 0) {
          this.coordinates = {x: this.coordinates.x, y: this.coordinates.y - 1}
        }
        break;

      case "E":
        if (this.coordinates.x !== this.grid.x) {
          this.coordinates = {x: this.coordinates.x + 1, y: this.coordinates.y}
        }
        break;

      case "W":
        if (this.coordinates.x !== 0) {
          this.coordinates = {x: this.coordinates.x - 1, y: this.coordinates.y}
        }
        break;
    }
  }

  // method for validating instruction M if the space in front is empty
  // used to check if a rover is occupying the space in front, as two rovers cannot occupy the same position

  checkForwardSpaceEmpty() {

    let existingRovers = this.grid.rovers;
    for (let rover of existingRovers) {
      switch (this.cardinalDirection) {

        case "N":
          if (rover.coordinates.x === this.coordinates.x && rover.coordinates.y === (this.coordinates.y + 1)) {
            return false;
          }
          break;

        case "S":
          if (rover.coordinates.x === this.coordinates.x && rover.coordinates.y === (this.coordinates.y - 1)) {
            return false;
          }
          break;

        case "E":
          if (rover.coordinates.x === (this.coordinates.x + 1) && rover.coordinates.y === this.coordinates.y) {
            return false;
          }
          break;

        case "W":
          if (rover.coordinates.x === (this.coordinates.x - 1) && rover.coordinates.y === this.coordinates.y) {
            return false;
          }
          break;
      }
    }
    return true;
  }

  // method for instructing rover to cycle through instructions array property and follow each instruction

  completeMovementInstructions() {
    let instructions = this.instructions;
    instructions.forEach(instruction => {
      switch (instruction) {
        case "L":
          this.rotateLeft();
          break;

        case "R":
          this.rotateRight();
          break;

        case "M":
          if (this.checkForwardSpaceEmpty()) {
            this.moveForward();
          }
          break;
      }
    })
  }


  // method for creating the output string that will be shown on console

  generateRoverPositionString() {
    this.positionString = `${this.coordinates.x} ${this.coordinates.y} ${this.cardinalDirection}`
    return this.positionString;
  }
}

module.exports = Rover;