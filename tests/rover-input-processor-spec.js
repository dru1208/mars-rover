const { expect } = require("chai");
const RoverInputProcessor = require("../rover-input-processor.js")


describe("RoverInputProcessor", () => {
  it ("should exist", () => {
    expect(RoverInputProcessor).to.not.be.undefined;
  })
})

describe("#generateRoverInstructions", () => {

  it ("should return an array of instructions from a string", () => {
    let string = "LMLMLM";
    let answerArray = ["L", "M", "L", "M", "L", "M"];
    let processor = new RoverInputProcessor
    expect(processor.generateRoverInstructions(string)).to.eql(answerArray);
  })
  it ("should only have string values of L, R, or M in the returned array and ignore other string values", () => {
    let potentialInstructions = ["L", "M", "R"];

    let string = "LMLMLM";
    let processor = new RoverInputProcessor;
    let instructions = processor.generateRoverInstructions(string);
    for (let instruction of instructions) {
      expect(potentialInstructions).to.contain(instruction);
    }

    string = "LMLMFLM";
    instructions = processor.generateRoverInstructions(string);
    for (let instruction of instructions) {
      expect(potentialInstructions).to.contain(instruction);
    }
  })

  it ("should return instructions that are in upper case", () => {
    let answerArray = ["L", "M", "R"];
    let string = "lmr"
    let processor = new RoverInputProcessor;
    expect(processor.generateRoverInstructions(string)).to.eql(answerArray)
  })
})


// array of instructions