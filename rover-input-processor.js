class RoverInputProcessor {

  generateRoverInfoObject(stringInput) {
    let roverInfoArray = stringInput.split(" ");
    if (roverInfoArray.length === 3) {

    } else {
      return false
    }
  }

  generateRoverInstructions(stringInput) {
    let inputInstructions =  stringInput.toUpperCase().split("");
    let filteredInstructions = inputInstructions.filter(instruction => instruction === "L" || instruction === "M" || instruction === "R");
    return filteredInstructions;
  }
}

module.exports = RoverInputProcessor;


// Test Input:
// 5 5
// 1 2 N
// LMLMLMLMM
// 3 3 E
// MMRMMRMRRM
// Expected Output:
// 1 3 N
// 5 1 E