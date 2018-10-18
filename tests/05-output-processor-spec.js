const { expect } = require("chai");
const OutputProcessor = require("../output-processor.js");
const Grid = require("../grid.js");
const Rover = require("../rover.js");

describe("Output Processor", () => {
  it ("should exist", () => {
    expect(OutputProcessor).to.not.be.undefined;
  })

  it ("should have the original grid variable passed in as the instance's grid property", () => {
    let grid = new Grid(3, 3);
    let processor = new OutputProcessor(grid);
    expect(processor.grid).to.eql(grid);
  })
})

// Output Method

describe("#findRoverPositions", () => {
  it("should return an array", () => {
    let grid = new Grid(3, 3);
    let processor = new OutputProcessor(grid);
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
    let processor = new OutputProcessor(grid);
    let roverPositions = processor.findRoverPositions();
    expect(roverPositions).to.eql(answer);
  })
})