class Rover {
  constructor(x_value, y_value, cardinal_direction) {
    this.x = x_value;
    this.y = y_value;
    this.cardinal_direction = cardinal_direction
  }

  rotateLeft () {
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
}

module.exports = Rover;