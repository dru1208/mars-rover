// Tests for the rover class definition

const { expect } = require("chai")
const Rover = require("../rover.js")
const Grid = require("../grid.js")


// Basic Rover Constructor Tests

describe("Rover", () => {
  it ("should exist", () => {
    expect(Rover).to.not.be.undefined;
  })
})


describe("New Rover Instance", () => {
  let marsGrid = new Grid(8, 8);
  let testRover1 = new Rover(2, 3, "N", marsGrid, []);
  let testRover2 = new Rover(5, 6, "S", marsGrid, []);

  it ("should create a new instance of Rover with the first argument as the x value of the coordinates property", () => {
    expect(testRover1.coordinates.x).to.equal(2);
    expect(testRover2.coordinates.x).to.equal(5);
  })

  it ("should create a new instance of Rover with the second argument as the y value of the coordinates property", () => {
    expect(testRover1.coordinates.y).to.equal(3);
    expect(testRover2.coordinates.y).to.equal(6);
  })

  it ("should create a new instance of Rover with the third argument as the cardinal direction property", () => {
    expect(testRover1.cardinal_direction).to.equal("N");
    expect(testRover2.cardinal_direction).to.equal("S");
  })

  it ("should create a new instance of Rover with the fourth argument as the grid the rover is on", () => {
    expect(testRover1.grid).to.equal(marsGrid);
    expect(testRover2.grid).to.equal(marsGrid);
  })
})

// Rover Rotation Methods

describe("#rotateLeft", () => {
  let marsGrid = new Grid(8, 8);

  it ("should rotate the cardinal direction left to W if the original direction is N", () => {
    let testRover = new Rover(2, 3, "N", marsGrid, []);
    testRover.rotateLeft();
    expect(testRover.cardinal_direction).to.equal("W");
  })

  it ("should rotate the cardinal direction left to E if the original direction is S", () => {
    let testRover = new Rover(5, 6, "S", marsGrid, []);
    testRover.rotateLeft();
    expect(testRover.cardinal_direction).to.equal("E");
  })

  it ("should rotate the cardinal direction left to N if the original direction is E", () => {
    let testRover = new Rover(7, 2, "E", marsGrid, []);
    testRover.rotateLeft();
    expect(testRover.cardinal_direction).to.equal("N");
  })

  it ("should rotate the cardinal direction left to S if the original direction is W", () => {
    let testRover = new Rover(3, 5, "W", marsGrid, []);
    testRover.rotateLeft();
    expect(testRover.cardinal_direction).to.equal("S");
  })
})

describe("#rotateRight", () => {
  let marsGrid = new Grid(8, 8);

  it ("should rotate the cardinal direction right to E if the original direction is N", () => {
    let testRover = new Rover(2, 3, "N", marsGrid, []);
    testRover.rotateRight();
    expect(testRover.cardinal_direction).to.equal("E");
  })

  it ("should rotate the cardinal direction right to W if the original direction is S", () => {
    let testRover = new Rover(5, 6, "S", marsGrid, []);
    testRover.rotateRight();
    expect(testRover.cardinal_direction).to.equal("W");
  })

  it ("should rotate the cardinal direction right to S if the original direction is E", () => {
    let testRover = new Rover(7, 2, "E", marsGrid, []);
    testRover.rotateRight();
    expect(testRover.cardinal_direction).to.equal("S");
  })

  it ("should rotate the cardinal direction right to N if the original direction is W", () => {
    let testRover = new Rover(3, 5, "W", marsGrid, []);
    testRover.rotateRight();
    expect(testRover.cardinal_direction).to.equal("N");
  })
})

// Rover Movement Method

describe("#moveSpace", () => {
  let marsGrid = new Grid(3, 3);
  it ("should move from (x, y) to (x, y + 1) if cardinal direction is N and y-coordinate is not maximum grid y-value", () => {
    let testRover = new Rover(1, 1, "N", marsGrid, []);
    testRover.moveForward();
    expect(testRover.coordinates).to.eql({x: 1, y: 2});
  })

  it ("should move from (x, y) to (x, y - 1) if cardinal direction is S and y-coordinate is not 0", () => {
    let testRover = new Rover(1, 1, "S", marsGrid, []);
    testRover.moveForward()
    expect(testRover.coordinates).to.eql({x: 1, y: 0});
  })

  it ("should move from (x, y) to (x + 1, y) if cardinal direction is E and x-coordinate is not maximum grid x-value", () => {
    let testRover = new Rover(1, 1, "E", marsGrid, []);
    testRover.moveForward();
    expect(testRover.coordinates).to.eql({x: 2, y: 1});
  })

  it ("should move from (x, y) to (x - 1, y) if cardinal direction is W and x-coordinate is not 0", () => {
    let testRover = new Rover(1, 1, "W", marsGrid, []);
    testRover.moveForward();
    expect(testRover.coordinates).to.eql({x: 0, y: 1})
  })

  it ("should stay in the same position if cardinal direction is N and y-coordinate is maximum grid y-value", () => {
    let testRover = new Rover(1, 3, "N", marsGrid, []);
    testRover.moveForward();
    expect(testRover.coordinates).to.eql({x: 1, y: 3})
  })

  it ("should stay in the same position if cardinal direction is S and y-coordinate is 0", () => {
    let testRover = new Rover(1, 0, "S", marsGrid, []);
    testRover.moveForward();
    expect(testRover.coordinates).to.eql({x: 1, y: 0})
  })

  it ("should stay in the same position if cardinal direction is E and x coordinate is maximum grid x-value", () => {
    let testRover = new Rover(3, 1, "E", marsGrid, []);
    testRover.moveForward()
    expect(testRover.coordinates).to.eql({x: 3, y: 1})
  })

  it ("should stay in the same position if cardinal direction is W and x coordiante is 0", () => {
    let testRover = new Rover(0, 1, "W", marsGrid, []);
    testRover.moveForward()
    expect(testRover.coordinates).to.eql({x: 0, y: 1})
  })
})


describe("#checkForwardSpaceBlocked", () => {
  it ("should return true if the coordinate space in front has a rover", () {

  })
  it ("should return false if the coordinate space in front doesn't have a rover", () => {

  })
})




