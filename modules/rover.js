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

  moveForward() {
    const frontCoordinates = this.findFrontCoordinates();
    if (frontCoordinates) {
      this.coordinates = frontCoordinates;
    }

    // switch (this.cardinalDirection) {

    //   case "N":
    //     if (this.coordinates.y !== this.grid.y) {
    //       this.coordinates = this.findFrontCoordinates();
    //     }
    //     break;

    //   case "S":
    //     if (this.coordinates.y !== 0) {
    //       this.coordinates = this.findFrontCoordinates();
    //     }
    //     break;

    //   case "E":
    //     if (this.coordinates.x !== this.grid.x) {
    //       this.coordinates = this.findFrontCoordinates();
    //     }
    //     break;

    //   case "W":
    //     if (this.coordinates.x !== 0) {
    //       this.coordinates = this.findFrontCoordinates();
    //     }
    //     break;
    // }
  }

  // test this out

  moveBackward() {

    switch (this.cardinalDirection) {
      case "N":

        if (this.coordinates.y !== 0) {
          this.coordinates = {x: this.coordinates.x, y: this.coordinates.y - 1}
        }
        break;

      case "S":
        if (this.coordinates.y !== this.grid.y) {
          this.coordinates = {x: this.coordinates.x, y: this.coordinates.y + 1}
        }
        break;

      case "E":
        if (this.coordinates.x !== 0) {
          this.coordinates = {x: this.coordinates.x - 1, y: this.coordinates.y}
        }
        break;
      case "W":
        if (this.coordinates.x !== this.grid.x) {
          this.coordinates = {x: this.coordinates.x + 1, y: this.coordinates.y}
        }
        break;
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
    const existingRover = this.grid.rover;

    for (const rover of existingRovers) {
      switch (this.cardinalDirection) {
        case "N":
          if (rover.coordinates.x === this.coordinates.x && rover.coordinates.y === this.coordinates.y - 1) {
            return false;
          }
          break;
        case "S":
          if (rover.coordinates.x === this.coordinates.x && rover.coordinates.y === this.coordinates.y + 1) {
            return false;
          }
          break;
        case "E":
          if (rover.coordinates.x === this.coordinates.x - 1 && rover.coordinates.y === this.coordinates.y) {
            return false;
          }
          break;
        case "W":
          if (rover.coordinates.x === this.coordinates.x + 1 && rover.coordinates.y === this.coordinates.y) {
            return false;
          }
          break;
      }
    }
    return true;
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