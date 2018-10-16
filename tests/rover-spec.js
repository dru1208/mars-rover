// Tests for the rover class definition

const { expect } = require("chai")
const Rover = require("../rover.js")


// Basic Rover Tests

describe("Rover", () => {
  it("should exist", () => {
    expect(Rover).to.not.be.undefined;
  })
})


describe("New Rover Instance", () => {
  let Rover1 = new Rover(2, 3, "N")
  let Rover2 = new Rover(5, 6, "S")
  it ("should create a new instance of Rover with the first argument as the x coordinate property", () => {
    expect(Rover1.x).to.equal(2);
    expect(Rover2.x).to.equal(5);
  })
  it ("should create a new instance of Rover with the second argument as the y coordinate property", () => {
    expect(Rover1.y).to.equal(3);
    expect(Rover2.y).to.equal(6);
  })
  it ("should create a new instance of Rover with the third argument as the cardinal direction property", () => {
    expect(Rover1.cardinal_direction).to.equal("N");
    expect(Rover2.cardinal_direction).to.equal("S");
  })
})