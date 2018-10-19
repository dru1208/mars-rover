"use strict";

// Tests for the processor class

const { expect } = require("chai");
const Processor = require("../modules/processor.js");
const Grid = require("../modules/grid.js");
const Rover = require("../modules/rover.js");

describe("Processor", () => {
  it ("should exist", () => {
    expect(Processor).to.not.be.undefined;
  })

})

// Output Method

describe("#findRoverPositions", () => {
  it("should return an array", () => {
    const processor = new Processor("input.txt");
    processor.grid = new Grid(3, 3)
    const roverPositions = processor.findRoverPositions();
    expect(Array.isArray(roverPositions)).to.be.true;
  })

  it ("should return an array with rover position strings", () => {
    const grid = new Grid(3, 3);
    const rover = new Rover(3, 3, "N", grid, []);
    const rover2 = new Rover(2, 2, "S", grid, []);
    const rover3 = new Rover(1, 1, "E", grid, []);
    grid.addRover(rover);
    grid.addRover(rover2);
    grid.addRover(rover3);
    const answer = ["3 3 N", "2 2 S", "1 1 E"];
    const processor = new Processor("input.txt");
    processor.grid = grid;
    const roverPositions = processor.findRoverPositions();
    expect(roverPositions).to.eql(answer);
  })
})