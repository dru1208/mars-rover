class GridInputProcessor {

  generateGridInfoObject(stringInput) {
    const gridInfoArray = stringInput.split(" ");
    if (gridInfoArray.length !== 2) {
      this.gridInfo = false;
      return this.gridInfo;
    }
    const x = parseInt(gridInfoArray[0]);
    const y = parseInt(gridInfoArray[1]);
    if (x && y && x > 0 && y > 0) {
      this.gridInfo = {
        x: x,
        y: y
      }
    } else {
      this.gridInfo = false;
    }
    return this.gridInfo
  }

}

module.exports = GridInputProcessor;