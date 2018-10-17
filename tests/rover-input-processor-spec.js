const { expect } = require("chai");
const RoverInputProcessor = require("../rover-input-processor.js")


describe("RoverInputProcessor", () => {
  it ("should exist", () => {
    expect(RoverInputProcessor).to.not.be.undefined;
  })
})

// takes an input and returns an object with x, y, and cardinal direction for the rover
describe("#generateRoverInfoObject", () => {
  it ("should return false if the string has more than 3 values separated by spaces", () => {
    let string = "3 3 3 N";
    let processor = new RoverInputProcessor;
    let roverInfo = processor.generateRoverInfoObject(string);
    expect(roverInfo).to.be.false;
  })

  it ("should return false if the string has less than 3 values separated by spaces", () => {
    let string = "r 3";
    let processor = new RoverInputProcessor;
    let roverInfo = processor.generateRoverInfoObject(string);
    expect(roverInfo).to.be.false;
  })

  it ("should return false if the first two values of the string are not numbers", () => {
    let string = "3 R N";
    let processor = new RoverInputProcessor;
    let roverInfo = processor.generateRoverInfoObject(string)
    expect(roverInfo).to.be.false;
  })

  it ("should return false if the third value of the string is not a cardinal direction", () => {
    let string = "3 3 A";
    let processor = new RoverInputProcessor;
    let roverInfo = processor.generateRoverInfoObject(string);
    expect(roverInfo).to.be.false;

    string = "3 3 3";
    roverInfo = processor.generateRoverInfoObject(string);
    expect(roverInfo).to.be.false;
  })

  it ("should return a rover info object with values matching keys of x, y coordinates and cardinal direction", () => {
    let string = "3 3 n";
    let processor = new RoverInputProcessor;
    let roverInfo = processor.generateRoverInfoObject(string);
    let answerObject = {x: 3, y: 3, cardinalDirection: "N"}
    expect(roverInfo).to.eql(answerObject);
  })
})



// rover instruction array from input

describe("#generateRoverInstructions", () => {
  it ("should return an array of instructions from a string", () => {
    let string = "LMLMLM";
    let answerArray = ["L", "M", "L", "M", "L", "M"];
    let processor = new RoverInputProcessor;
    processor.generateRoverInstructions(string)
    expect(processor.roverInstructions).to.eql(answerArray);
  })
  it ("should only have string values of L, R, or M in the returned array and ignore other string values", () => {
    let potentialInstructions = ["L", "M", "R"];

    let string = "LMLMLM";
    let processor = new RoverInputProcessor;
    processor.generateRoverInstructions(string);
    for (let instruction of processor.roverInstructions) {
      expect(potentialInstructions).to.contain(instruction);
    }

    string = "LMLMFLM";
    processor.generateRoverInstructions(string);
    instructions = processor.roverInstructions;
    for (let instruction of instructions) {
      expect(potentialInstructions).to.contain(instruction);
    }
  })

  it ("should return instructions that are in upper case", () => {
    let answerArray = ["L", "M", "R"];
    let string = "lmr"
    let processor = new RoverInputProcessor;
    processor.generateRoverInstructions(string)
    expect(processor.roverInstructions).to.eql(answerArray)
  })
})
