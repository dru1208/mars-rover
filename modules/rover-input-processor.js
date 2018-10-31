const { potentialDirections, potentialInstructions } = require("./constants.js")

class RoverInputProcessor {
  // get a consistent return instead of a boolean and an object (maybe an empty object)
  generateRoverInfoObject(stringInput) {
    const roverInfoArray = stringInput.split(" ");
    if (roverInfoArray.length !== 3) {
      this.roverInfo =  false;
      return this.roverInfo;
    }
    const x = parseInt(roverInfoArray[0]);
    const y = parseInt(roverInfoArray[1]);
    const cardinalDirection = roverInfoArray[2].toUpperCase();
    if (x >= 0 && y >= 0 && potentialDirections.includes(cardinalDirection)) {
      this.roverInfo =  {
        x: x,
        y: y,
        cardinalDirection: cardinalDirection
      }
    } else {
      this.roverInfo = false;
    }
    return this.roverInfo;
  }

  generateRoverInstructions(stringInput) {
    const inputInstructions =  stringInput.toUpperCase().split("");
    const filteredInstructions = inputInstructions.filter(instruction => potentialInstructions.includes(instruction));
    this.roverInstructions = filteredInstructions;
    // add a check if the instructions are different after filtering, maybe a console log to let the user know
    return this.roverInstructions;
  }
}

module.exports = RoverInputProcessor;