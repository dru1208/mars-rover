class GridInputProcessor {

  generateGridInfoObject(stringInput) {
    let gridInfoArray = stringInput.split(" ");
    if (gridInfoArray.length !== 2) {
      this.gridInfo = false;
      return this.gridInfo;
    }
  }

}

module.exports = GridInputProcessor;