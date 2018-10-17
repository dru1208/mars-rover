"use strict"

const { expect } = require("chai");
const Grid = require("../grid.js");
const Rover = require("../rover.js")


// Basic Grid Constructor Tests

describe("Grid", () => {
  it ("should exist", () => {
    expect(Grid).to.not.be.undefined;
  })
})


describe("New Grid Instance", () => {
  let testGrid1 = new Grid(3, 5);
  let testGrid2 = new Grid(8, 2);
  it ("should create a new instance of Grid with the first argument as the x property", () => {
    expect(testGrid1.x).to.equal(3);
    expect(testGrid2.x).to.equal(8);
  })
  it ("should create a new instance of Grid with the second argument as the y property", () => {
    expect(testGrid1.y).to.equal(5);
    expect(testGrid2.y).to.equal(2);
  })
  it("should create a new instance of Grid with no rovers in the rover coordinates array", () => {
    expect(testGrid1.rovers).to.eql([]);
    expect(testGrid2.rovers).to.eql([]);
  })
})

describe("#addRover", () => {
  let testGrid1 = new Grid(8, 8);
  let testGrid2 = new Grid(3, 3);
  let testRover = new Rover(4, 4, "N", testGrid1, [])
  let testRover2 = new Rover(3, 3, "N", testGrid2, [])

  it ("should add new rovers to the rover array if the rover coordinates are in the grid area", () => {
    testGrid1.addRover(testRover);
    expect(testGrid1.rovers).to.eql([testRover]);
  })
  it ("should not add new rovers to the rover array if the rover coordinates are outside the grid area", () => {
    testGrid2.addRover(testRover);
    expect(testGrid2.rovers).to.eql([]);
  })
  it ("should add new rovers to the rover array if a rover coordinate is at the max values of the grid", () => {
    testGrid2.addRover(testRover2);
    expect(testGrid2.rovers).to.eql([testRover2]);
  })
})

describe("#checkRoverPlacementValidity", () => {
  let grid1 = new Grid(3, 3);
  let existingRover = new Rover(2, 2, "N", grid1, [])
  let testRover = new Rover(2, 2, "S", )
  it ("should return true if the new rover's coordinates are not occupied by an existing rover", () => {
    expect(grid1.checkRoverPlacementValidity(testRover)).to.be.true;
  })
  it ("should return false if the new rover's coordinates are occupied by an existing rover", () => {
    grid1.addRover(existingRover);
    expect(grid1.checkRoverPlacementValidity(testRover)).to.be.false;
  })
})