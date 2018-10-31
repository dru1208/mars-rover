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


  // potentially move this to the grid class, rover asks grid for coordinates in front

  findFrontCoordinates() {
    switch (this.cardinalDirection) {
      case "N":
        return (this.coordinates.y !== this.grid.y) ? {x: this.coordinates.x, y: this.coordinates.y + 1} : null
      case "S":
        return (this.coordinates.y !== 0) ? {x: this.coordinates.x, y: this.coordinates.y - 1}  : null
      case "E":
        return (this.coordinates.x !== this.grid.x) ? {x: this.coordinates.x + 1, y: this.coordinates.y} : null
      case "W":
        return (this.coordinates.x !== 0) ? {x: this.coordinates.x - 1, y: this.coordinates.y} : null
    }
  }

  findBackCoodinates() {
    switch (this.cardinalDirection) {
      case "N":
        return (this.coordinates.y !== this.grid.y) ? {x: this.coordinates.x, y: this.coordinates.y - 1} : null
      case "S":
        return (this.coordinates.y !== 0) ? {x: this.coordinates.x, y: this.coordinates.y + 1}  : null
      case "E":
        return (this.coordinates.x !== this.grid.x) ? {x: this.coordinates.x - 1, y: this.coordinates.y} : null
      case "W":
        return (this.coordinates.x !== 0) ? {x: this.coordinates.x + 1, y: this.coordinates.y} : null
    }
  }

  moveForward() {
    const frontCoordinates = this.findFrontCoordinates();
    if (frontCoordinates) {
      this.coordinates = frontCoordinates;
    }
  }

  // test this out

  moveBackward() {
    const backCoordinates = this.findBackCoodinates();
    if (backCoordinates) {
      this.coordinates = backCoordinates;
    }
  }

  // method for validating instruction M if the space in front is empty
  // used to check if a rover is occupying the space in front, as two rovers cannot occupy the same position

  checkForwardSpaceEmpty() {

    const existingRovers = this.grid.rovers;
    const frontCoordinates = this.findFrontCoordinates();
    if (frontCoordinates) {
      for (const rover of existingRovers) {
        if (rover.coordinates.x === frontCoordinates.x && rover.coordinates.y === frontCoordinates.y) {
          return false
        }
      }
      return true;
    } else {
      return false;
    }
  }

  // test this out

  checkBackwardSpaceEmpty() {
    const existingRovers = this.grid.rovers;
    const backCoordinates = this.findBackCoodinates;
    if (backCoordinates) {
      for (const rover of existingRovers) {
        if (rover.coordinates.x === backCoordinates.x && rover.coordinates.y == backCoordinates.y) {
          return false
        }
      }
      return true;
    } else {
      return false;
    }
  }

  // method for instructing rover to cycle through instructions array property and follow each instruction

  completeMovementInstructions() {
    const instructions = this.instructions;
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