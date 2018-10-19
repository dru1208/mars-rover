const { expect } = require("chai");
const Processor = require("../processor.js");
const Grid = require("../grid.js");
const Rover = require("../rover.js");

describe("Processor", () => {
  it ("should exist", () => {
    expect(Processor).to.not.be.undefined;
  })

})

// Output Method

describe("#findRoverPositions", () => {
  it("should return an array", () => {
    let processor = new Processor("input.txt");
    processor.grid = new Grid(3, 3)
    let roverPositions = processor.findRoverPositions();
    expect(Array.isArray(roverPositions)).to.be.true;
  })

  it ("should return an array with rover position strings", () => {
    let grid = new Grid(3, 3);
    let rover = new Rover(3, 3, "N", grid, []);
    let rover2 = new Rover(2, 2, "S", grid, []);
    let rover3 = new Rover(1, 1, "E", grid, []);
    grid.addRover(rover);
    grid.addRover(rover2);
    grid.addRover(rover3);
    let answer = ["3 3 N", "2 2 S", "1 1 E"];
    let processor = new Processor("input.txt");
    processor.grid = grid;
    let roverPositions = processor.findRoverPositions();
    expect(roverPositions).to.eql(answer);
  })
})