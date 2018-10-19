class Grid {
  constructor(x_value, y_value) {
    this.x = x_value;
    this.y = y_value;
    this.rovers = [];
  }

  addRover(rover) {
    const { coordinates } = rover
    if (coordinates.x <= this.x &&
      coordinates.y <= this.y) {
      this.rovers.push(rover);
    }
  }

  checkRoverPlacementValidity(newRover) {
    const { coordinates } = newRover
    for (const existingRover of this.rovers) {
      if (coordinates.x === existingRover.coordinates.x &&
        coordinates.y === existingRover.coordinates.y) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Grid;