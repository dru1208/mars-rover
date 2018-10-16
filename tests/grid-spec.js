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
  let testGrid1 = new Grid(3, 3);
  let testGrid2 = new Grid(8, 8);


  it ("should add new rovers to the rover coordinates array if the rover coordinates are in the grid area", () => {
    let testRover1 = new Rover(4, 4, "N", testGrid1)
    testGrid1.addRover(testRover1);
    expect(testGrid1.rovers).to.eql([testRover1])
  })
})