class Grid {
  constructor(x_value, y_value) {
    this.x = x_value;
    this.y = y_value;
    this.rovers = [];
  }

  addRover(rover) {
    this.rovers.push(rover);
  }
}

module.exports = Grid;