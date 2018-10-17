class Grid {
  constructor(x_value, y_value) {
    this.x = x_value;
    this.y = y_value;
    this.rovers = [];
  }

  addRover(rover) {
    if (rover.coordinates.x <= this.x &&
      rover.coordinates.y <= this.y) {
      this.rovers.push(rover);
    }
  }

  checkRoverPlacementValidity(newRover) {
    for (let rover of this.rovers) {
      if (newRover.coordinates.x === rover.coordinates.x &&
        newRover.coordinates.y === rover.coordinates.y) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Grid;