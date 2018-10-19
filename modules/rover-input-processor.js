const { potentialDirections, potentialInstructions } = require("./constants.js")

class RoverInputProcessor {

  generateRoverInfoObject(stringInput) {
    const roverInfoArray = stringInput.split(" ");
    if (roverInfoArray.length !== 3) {
      this.roverInfo =  false;
      return this.roverInfo;
    }
    const x = parseInt(roverInfoArray[0]);
    const y = parseInt(roverInfoArray[1]);
    const cardinalDirection = roverInfoArray[2].toUpperCase();
    if (x && y && x >= 0 && y >= 0 && potentialDirections.includes(cardinalDirection)) {
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
    return this.roverInstructions;
  }
}

module.exports = RoverInputProcessor;