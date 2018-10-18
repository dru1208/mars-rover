const { expect } = require("chai");
const OutputProcessor = require("../output-processor.js");
const Grid = require("../grid.js")

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
})