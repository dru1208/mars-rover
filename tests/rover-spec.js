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
  let Rover1 = new Rover(2, 3, "N", marsGrid);
  let Rover2 = new Rover(5, 6, "S", marsGrid);
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
  it ("should create a new instance of Rover with the fourth argument as the grid the rover is on", () => {
    expect(Rover1.grid).to.equal(marsGrid);
    expect(Rover2.grid).to.equal(marsGrid);
  })
})

// Rover Rotation Methods

describe("#rotateLeft", () => {
  let marsGrid = new Grid(8, 8);
  let Rover1 = new Rover(2, 3, "N", marsGrid);
  let Rover2 = new Rover(5, 6, "S", marsGrid);
  let Rover3 = new Rover(7, 2, "E", marsGrid);
  let Rover4 = new Rover(3, 5, "W", marsGrid);
  it ("should rotate the cardinal direction left to W if the original direction is N", () => {
    Rover1.rotateLeft();
    expect(Rover1.cardinal_direction).to.equal("W");
  })
  it ("should rotate the cardinal direction left to E if the original direction is S", () => {
    Rover2.rotateLeft();
    expect(Rover2.cardinal_direction).to.equal("E");
  })
  it ("should rotate the cardinal direction left to N if the original direction is E", () => {
    Rover3.rotateLeft();
    expect(Rover3.cardinal_direction).to.equal("N");
  })
  it ("should rotate the cardinal direction left to S if the original direction is W", () => {
    Rover4.rotateLeft();
    expect(Rover4.cardinal_direction).to.equal("S");
  })
})

describe("#rotateRight", () => {
  let marsGrid = new Grid(8, 8);
  let Rover1 = new Rover(2, 3, "N", marsGrid);
  let Rover2 = new Rover(5, 6, "S", marsGrid);
  let Rover3 = new Rover(7, 2, "E", marsGrid);
  let Rover4 = new Rover(3, 5, "W", marsGrid);
  it ("should rotate the cardinal direction right to E if the original direction is N", () => {
    Rover1.rotateRight();
    expect(Rover1.cardinal_direction).to.equal("E");
  })
  it ("should rotate the cardinal direction right to W if the original direction is S", () => {
    Rover2.rotateRight();
    expect(Rover2.cardinal_direction).to.equal("W");
  })
  it ("should rotate the cardinal direction right to S if the original direction is E", () => {
    Rover3.rotateRight();
    expect(Rover3.cardinal_direction).to.equal("S");
  })
  it ("should rotate the cardinal direction right to N if the original direction is W", () => {
    Rover4.rotateRight();
    expect(Rover4.cardinal_direction).to.equal("N");
  })
})

// Rover Movement Method

// describe("#moveSpace", () => {
//   let Grid = new Grid(3, 3)
//   let Rover1 = (1, 1, "N")
//   let Rover1 = (1, 1, "S")
//   let Rover1 = (1, 1, "E")
//   let Rover1 = (1, 1, "W")

//   it ("should move from (x, y) to (x, y + 1) if cardinal direction is N and y-coordinate is not maximum grid y-value" => {

//   })

//   it ("should move from (x, y) to (x, y - 1) if cardinal direction is S and y-coordinate is not 0" => {

//   })

//   it ("should move from (x, y) to (x + 1, y) if cardinal direction is E and x coordinate is not maximum grid x-value" => {

//   })

//   it ("should move from (x, y) to (x - 1, y) if cardinal direction is W and x coordiante is not 0" => {

//   })



//   // it ("should not move from (x, y) if cardinal direction is N and y-coordinate is maximum grid y-value" => {

//   // })

//   // it ("should not move from (x, y) if cardinal direction is S and y-coordinate is 0" => {

//   // })

//   // it ("should not move from (x, y) if cardinal direction is E and x coordinate is maximum grid x-value" => {

//   // })

//   // it ("should not move from (x, y) if cardinal direction is W and x coordiante is 0" => {

//   // })
// })






