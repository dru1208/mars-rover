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
  let rover1 = new Rover(2, 3, "N", marsGrid);
  let rover2 = new Rover(5, 6, "S", marsGrid);
  it ("should create a new instance of Rover with the first argument as the x value of the coordinates property", () => {
    expect(rover1.coordinates.x).to.equal(2);
    expect(rover2.coordinates.x).to.equal(5);
  })
  it ("should create a new instance of Rover with the second argument as the y value of the coordinates property", () => {
    expect(rover1.coordinates.y).to.equal(3);
    expect(rover2.coordinates.y).to.equal(6);
  })
  it ("should create a new instance of Rover with the third argument as the cardinal direction property", () => {
    expect(rover1.cardinal_direction).to.equal("N");
    expect(rover2.cardinal_direction).to.equal("S");
  })
  it ("should create a new instance of Rover with the fourth argument as the grid the rover is on", () => {
    expect(rover1.grid).to.equal(marsGrid);
    expect(rover2.grid).to.equal(marsGrid);
  })
})

// Rover Rotation Methods

describe("#rotateLeft", () => {
  let marsGrid = new Grid(8, 8);
  let rover1 = new Rover(2, 3, "N", marsGrid);
  let rover2 = new Rover(5, 6, "S", marsGrid);
  let rover3 = new Rover(7, 2, "E", marsGrid);
  let rover4 = new Rover(3, 5, "W", marsGrid);
  it ("should rotate the cardinal direction left to W if the original direction is N", () => {
    rover1.rotateLeft();
    expect(rover1.cardinal_direction).to.equal("W");
  })
  it ("should rotate the cardinal direction left to E if the original direction is S", () => {
    rover2.rotateLeft();
    expect(rover2.cardinal_direction).to.equal("E");
  })
  it ("should rotate the cardinal direction left to N if the original direction is E", () => {
    rover3.rotateLeft();
    expect(rover3.cardinal_direction).to.equal("N");
  })
  it ("should rotate the cardinal direction left to S if the original direction is W", () => {
    rover4.rotateLeft();
    expect(rover4.cardinal_direction).to.equal("S");
  })
})

describe("#rotateRight", () => {
  let marsGrid = new Grid(8, 8);
  let rover1 = new Rover(2, 3, "N", marsGrid);
  let rover2 = new Rover(5, 6, "S", marsGrid);
  let rover3 = new Rover(7, 2, "E", marsGrid);
  let rover4 = new Rover(3, 5, "W", marsGrid);
  it ("should rotate the cardinal direction right to E if the original direction is N", () => {
    rover1.rotateRight();
    expect(rover1.cardinal_direction).to.equal("E");
  })
  it ("should rotate the cardinal direction right to W if the original direction is S", () => {
    rover2.rotateRight();
    expect(rover2.cardinal_direction).to.equal("W");
  })
  it ("should rotate the cardinal direction right to S if the original direction is E", () => {
    rover3.rotateRight();
    expect(rover3.cardinal_direction).to.equal("S");
  })
  it ("should rotate the cardinal direction right to N if the original direction is W", () => {
    rover4.rotateRight();
    expect(rover4.cardinal_direction).to.equal("N");
  })
})

// Rover Movement Method

describe("#moveSpace", () => {
  let marsGrid = new Grid(3, 3);
  let rover1 = (1, 1, "N", marsGrid);
  let rover2 = (1, 1, "S", marsGrid);
  let rover3 = (1, 1, "E", marsGrid);
  let rover4 = (1, 1, "W", marsGrid);
  it ("should move from (x, y) to (x, y + 1) if cardinal direction is N and y-coordinate is not maximum grid y-value", () => {
    rover1.moveSpace();
    expect(rover1.coordinates).to.eql({x: 1, y: 2});
  })

  it ("should move from (x, y) to (x, y - 1) if cardinal direction is S and y-coordinate is not 0", () => {
    rover2.moveSpace()
    expect(rover2.coordinates).to.eql({x: 1, y: 0});
  })

  it ("should move from (x, y) to (x + 1, y) if cardinal direction is E and x coordinate is not maximum grid x-value", () => {
    rover3.moveSpace();
    expect(rover3.coordinates).to.eql({x: 2, y: 1});
  })

  it ("should move from (x, y) to (x - 1, y) if cardinal direction is W and x coordiante is not 0", () => {
    rover4.moveSpace();
    expect(rover4.coordinates).to.eql({x: 0, y: 1})
  })
})



//   // it ("should not move from (x, y) if cardinal direction is N and y-coordinate is maximum grid y-value" => {

//   // })

//   // it ("should not move from (x, y) if cardinal direction is S and y-coordinate is 0" => {

//   // })

//   // it ("should not move from (x, y) if cardinal direction is E and x coordinate is maximum grid x-value" => {

//   // })

//   // it ("should not move from (x, y) if cardinal direction is W and x coordiante is 0" => {

//   // })






