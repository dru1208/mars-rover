"use strict"

const { expect } = require("chai");
const Grid = require("../grid.js");


// Basic Grid Constructor Tests

describe("Grid", () => {
  it ("should exist", () => {
    expect(Grid).to.not.be.undefined;
  })
})


describe("New Grid Instance", () => {
  let Grid1 = new Grid(3, 5);
  let Grid2 = new Grid(8, 2);
  it ("should create a new instance of Grid with the first argument as the x property", () => {
    expect(Grid1.x).to.equal(3);
    expect(Grid2.x).to.equal(8);
  })
  it ("should create a new instance of Grid with the second argument as the y property", () => {
    expect(Grid1.y).to.equal(5);
    expect(Grid2.y).to.equal(2);
  })
  it("should create a new instance of Grid with no rovers in the rover coordinates array", () => {
    expect(Grid1.roverCoordinates).to.eql([]);
    expect(Grid2.roverCoordinates).to.eql([]);
  })
})

describe("#addRover", () => {
  let Grid1 = new Grid(3, 3);
  let Grid2 = new Grid(8, 8);

  it ("should add new rovers to the rover coordinates array if the rover coordinates are in the grid area", () => {

  })
})