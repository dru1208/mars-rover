class Rover {
  constructor(x_value, y_value, cardinal_direction, grid, instructions) {
    this.coordinates = {x: x_value, y: y_value};
    this.cardinal_direction = cardinal_direction;
    this.grid = grid;
    this.instructions = instructions;
  }

  rotateLeft() {
    switch (this.cardinal_direction) {
      case "N":
        this.cardinal_direction = "W";
        break;
      case "W":
        this.cardinal_direction = "S";
        break;
      case "S":
        this.cardinal_direction = "E";
        break;
      case "E":
        this.cardinal_direction = "N";
        break;
    }
  }

  rotateRight() {
    switch (this.cardinal_direction) {
      case "N":
        this.cardinal_direction = "E";
        break;
      case "E":
        this.cardinal_direction = "S";
        break;
      case "S":
        this.cardinal_direction = "W";
        break;
      case "W":
        this.cardinal_direction = "N";
        break;
    }
  }

  moveForward() {
    switch (this.cardinal_direction) {
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

  checkForwardSpaceOccupancy() {

  }
}

module.exports = Rover;