"use strict";

// Tests for the rover input processor class

const { expect } = require("chai");
const RoverInputProcessor = require("../modules/rover-input-processor.js")


describe("RoverInputProcessor", () => {
  it ("should exist", () => {
    expect(RoverInputProcessor).to.not.be.undefined;
  })
})

// takes an input and returns an object with x, y, and cardinal direction for the rover

describe("#generateRoverInfoObject", () => {
  it ("should return false if the string has more than 3 values separated by spaces", () => {
    const string = "3 3 3 N";
    const processor = new RoverInputProcessor;
    const roverInfo = processor.generateRoverInfoObject(string);
    expect(roverInfo).to.be.false;
  })

  it ("should return false if the string has less than 3 values separated by spaces", () => {
    const string = "r 3";
    const processor = new RoverInputProcessor;
    const roverInfo = processor.generateRoverInfoObject(string);
    expect(roverInfo).to.be.false;
  })

  it ("should return false if the first two values of the string are not numbers", () => {
    let string = "3 R N";
    const processor = new RoverInputProcessor;
    let roverInfo = processor.generateRoverInfoObject(string)
    expect(roverInfo).to.be.false;

    string = "1 !2 N";
    roverInfo = processor.generateRoverInfoObject(string);
    expect(roverInfo).to.be.false;
  })

  it ("should return false if the third value of the string is not a cardinal direction", () => {
    let string = "3 3 A";
    const processor = new RoverInputProcessor;
    let roverInfo = processor.generateRoverInfoObject(string);
    expect(roverInfo).to.be.false;

    string = "3 3 3";
    roverInfo = processor.generateRoverInfoObject(string);
    expect(roverInfo).to.be.false;
  })

  it ("should return a rover info object with values matching keys of x, y coordinates and cardinal direction", () => {
    const string = "3 3 n";
    const processor = new RoverInputProcessor;
    const roverInfo = processor.generateRoverInfoObject(string);
    const answerObject = {x: 3, y: 3, cardinalDirection: "N"}
    expect(roverInfo).to.eql(answerObject);
  })
})



// rover instruction array from input

describe("#generateRoverInstructions", () => {

  it ("should return an array of instructions from a string", () => {
    const string = "LMLMLM";
    const answerArray = ["L", "M", "L", "M", "L", "M"];
    const processor = new RoverInputProcessor;
    const instructions = processor.generateRoverInstructions(string)
    expect(instructions).to.eql(answerArray);
  })

  it ("should only have string values of L, R, or M in the returned array and ignore other string values", () => {
    const potentialInstructions = ["L", "M", "R"];

    let string = "LMLMLM";
    const processor = new RoverInputProcessor;
    let instructions = processor.generateRoverInstructions(string);
    for (const instruction of instructions) {
      expect(potentialInstructions).to.contain(instruction);
    }

    string = "LMLMFLM";
    instructions = processor.generateRoverInstructions(string);
    for (const instruction of instructions) {
      expect(potentialInstructions).to.contain(instruction);
    }
  })

  it ("should return instructions that are in upper case", () => {
    const answerArray = ["L", "M", "R"];
    const string = "lmr"
    const processor = new RoverInputProcessor;
    const instructions = processor.generateRoverInstructions(string)
    expect(instructions).to.eql(answerArray)
  })
})
