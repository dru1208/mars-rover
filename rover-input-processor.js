class RoverInputProcessor {

  generateRoverInfoObject(stringInput) {
    let roverInfoArray = stringInput.split(" ");
    if (roverInfoArray.length !== 3) {
      this.roverInfo =  false;
      return this.roverInfo;
    }
    let x = parseInt(roverInfoArray[0]);
    let y = parseInt(roverInfoArray[1]);
    let cardinalDirection = roverInfoArray[2].toUpperCase();
    let potentialDirections = ["N", "S", "E", "W"];
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
    let inputInstructions =  stringInput.toUpperCase().split("");
    let filteredInstructions = inputInstructions.filter(instruction => instruction === "L" || instruction === "M" || instruction === "R");
    this.roverInstructions = filteredInstructions;
    return this.roverInstructions;
  }
}

module.exports = RoverInputProcessor;


// Test Input:
// 5 5

// {x: 5, y: 5}


// 1 2 N
// LMLMLMLMM

// 3 3 E
// MMRMMRMRRM

// Expected Output:
// 1 3 N
// 5 1 E