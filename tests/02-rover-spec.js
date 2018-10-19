"use strict"

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
  let testRover1 = new Rover(2, 3, "N", marsGrid);
  let testRover2 = new Rover(5, 6, "S", marsGrid);

  it ("should create a new instance of Rover with the first argument as the x value of the coordinates property", () => {
    expect(testRover1.coordinates.x).to.equal(2);
    expect(testRover2.coordinates.x).to.equal(5);
  })

  it ("should create a new instance of Rover with the second argument as the y value of the coordinates property", () => {
    expect(testRover1.coordinates.y).to.equal(3);
    expect(testRover2.coordinates.y).to.equal(6);
  })

  it ("should create a new instance of Rover with the third argument as the cardinal direction property", () => {
    expect(testRover1.cardinalDirection).to.equal("N");
    expect(testRover2.cardinalDirection).to.equal("S");
  })

  it ("should create a new instance of Rover with the fourth argument as the grid the rover is on", () => {
    expect(testRover1.grid).to.equal(marsGrid);
    expect(testRover2.grid).to.equal(marsGrid);
  })
})

// Rover Add Instructions Method

describe("#addInstructions", () => {
  it ("should add an array as the property instructions of the rover instance", () => {
    let grid = new Grid (4, 4);
    let instructions = ["L", "R", "M"];
    let rover = new Rover(3, 3, "N", grid);
    rover.addInstructions(instructions);
    expect(rover.instructions).to.eql(instructions);
  })
})

// Rover Rotation Methods

describe("#rotateLeft", () => {
  let marsGrid = new Grid(8, 8);

  it ("should rotate the cardinal direction left to W if the original direction is N", () => {
    let testRover = new Rover(2, 3, "N", marsGrid);
    testRover.rotateLeft();
    expect(testRover.cardinalDirection).to.equal("W");
  })

  it ("should rotate the cardinal direction left to E if the original direction is S", () => {
    let testRover = new Rover(5, 6, "S", marsGrid);
    testRover.rotateLeft();
    expect(testRover.cardinalDirection).to.equal("E");
  })

  it ("should rotate the cardinal direction left to N if the original direction is E", () => {
    let testRover = new Rover(7, 2, "E", marsGrid);
    testRover.rotateLeft();
    expect(testRover.cardinalDirection).to.equal("N");
  })

  it ("should rotate the cardinal direction left to S if the original direction is W", () => {
    let testRover = new Rover(3, 5, "W", marsGrid);
    testRover.rotateLeft();
    expect(testRover.cardinalDirection).to.equal("S");
  })
})

describe("#rotateRight", () => {
  let marsGrid = new Grid(8, 8);

  it ("should rotate the cardinal direction right to E if the original direction is N", () => {
    let testRover = new Rover(2, 3, "N", marsGrid);
    testRover.rotateRight();
    expect(testRover.cardinalDirection).to.equal("E");
  })

  it ("should rotate the cardinal direction right to W if the original direction is S", () => {
    let testRover = new Rover(5, 6, "S", marsGrid);
    testRover.rotateRight();
    expect(testRover.cardinalDirection).to.equal("W");
  })

  it ("should rotate the cardinal direction right to S if the original direction is E", () => {
    let testRover = new Rover(7, 2, "E", marsGrid);
    testRover.rotateRight();
    expect(testRover.cardinalDirection).to.equal("S");
  })

  it ("should rotate the cardinal direction right to N if the original direction is W", () => {
    let testRover = new Rover(3, 5, "W", marsGrid);
    testRover.rotateRight();
    expect(testRover.cardinalDirection).to.equal("N");
  })
})

// Rover Movement Method

describe("#moveForward", () => {
  let marsGrid = new Grid(3, 3);
  it ("should move from (x, y) to (x, y + 1) if cardinal direction is N and y-coordinate is not maximum grid y-value", () => {
    let testRover = new Rover(1, 1, "N", marsGrid);
    testRover.moveForward();
    expect(testRover.coordinates).to.eql({x: 1, y: 2});
  })

  it ("should move from (x, y) to (x, y - 1) if cardinal direction is S and y-coordinate is not 0", () => {
    let testRover = new Rover(1, 1, "S", marsGrid);
    testRover.moveForward();
    expect(testRover.coordinates).to.eql({x: 1, y: 0});
  })

  it ("should move from (x, y) to (x + 1, y) if cardinal direction is E and x-coordinate is not maximum grid x-value", () => {
    let testRover = new Rover(1, 1, "E", marsGrid);
    testRover.moveForward();
    expect(testRover.coordinates).to.eql({x: 2, y: 1});
  })

  it ("should move from (x, y) to (x - 1, y) if cardinal direction is W and x-coordinate is not 0", () => {
    let testRover = new Rover(1, 1, "W", marsGrid);
    testRover.moveForward();
    expect(testRover.coordinates).to.eql({x: 0, y: 1});
  })

  it ("should stay in the same position if cardinal direction is N and y-coordinate is maximum grid y-value", () => {
    let testRover = new Rover(1, 3, "N", marsGrid);
    testRover.moveForward();
    expect(testRover.coordinates).to.eql({x: 1, y: 3});
  })

  it ("should stay in the same position if cardinal direction is S and y-coordinate is 0", () => {
    let testRover = new Rover(1, 0, "S", marsGrid);
    testRover.moveForward();
    expect(testRover.coordinates).to.eql({x: 1, y: 0});
  })

  it ("should stay in the same position if cardinal direction is E and x coordinate is maximum grid x-value", () => {
    let testRover = new Rover(3, 1, "E", marsGrid);
    testRover.moveForward();
    expect(testRover.coordinates).to.eql({x: 3, y: 1});
  })

  it ("should stay in the same position if cardinal direction is W and x coordiante is 0", () => {
    let testRover = new Rover(0, 1, "W", marsGrid);
    testRover.moveForward();
    expect(testRover.coordinates).to.eql({x: 0, y: 1});
  })
})

// Rover Movement Validity Tests

describe("#checkForwardSpaceEmpty", () => {

  it ("should return false if the coordinate space in front has a rover when facing N", () => {
    let grid = new Grid(3, 3);
    let existingRoverN = new Rover(2, 3, "N", grid);
    grid.addRover(existingRoverN);
    let roverN = new Rover(2, 2, "N", grid);
    expect(roverN.checkForwardSpaceEmpty()).to.be.false;
  })

  it ("should return false if the coordinate space in front has a rover when facing S", () => {
    let grid = new Grid(3, 3);
    let existingRoverS = new Rover(2, 1, "S", grid);
    grid.addRover(existingRoverS);
    let roverS = new Rover(2, 2, "S", grid);
    expect(roverS.checkForwardSpaceEmpty()).to.be.false;
  })

  it ("should return false if the coordinate space in front has a rover when facing E", () => {
    let grid = new Grid(3, 3);
    let existingRoverE = new Rover(3, 2, "E", grid);
    grid.addRover(existingRoverE);
    let roverE = new Rover(2, 2, "E", grid);
    expect(roverE.checkForwardSpaceEmpty()).to.be.false;
  })

  it ("should return false if the coordinate space in front has a rover when facing W", () => {
    let grid = new Grid(3, 3);
    let existingRoverW = new Rover(1, 2, "W", grid);
    grid.addRover(existingRoverW);
    let roverW = new Rover(2, 2, "W", grid);
    expect(roverW.checkForwardSpaceEmpty()).to.be.false;
  })

  it ("should return true if the coordinate space in front doesn't have a rover when facing N", () => {
    let grid = new Grid(3, 3);
    let roverN = new Rover(2, 2, "N", grid);
    expect(roverN.checkForwardSpaceEmpty()).to.be.true;
  })

  it ("should return true if the coordinate space in front doesn't have a rover when facing S", () => {
    let grid = new Grid(3, 3);
    let roverS = new Rover(2, 2, "S", grid);
    expect(roverS.checkForwardSpaceEmpty()).to.be.true;
  })

  it ("should return true if the coordinate space in front doesn't have a rover when facing E", () => {
    let grid = new Grid(3, 3);
    let roverE = new Rover(2, 2, "E", grid);
    expect(roverE.checkForwardSpaceEmpty()).to.be.true;
  })

  it ("should return true if the coordinate space in front doesn't have a rover when facing W", () => {
    let grid = new Grid(3, 3);
    let roverW = new Rover(2, 2, "W", grid);
    expect(roverW.checkForwardSpaceEmpty()).to.be.true;
  })
})


// Rover Instruction Method That Handles Movement

describe("#completeMovementInstructions", () => {
  it ("should cycle through the instructions array and change the rover's direction/move forward accordingly", () => {
    let grid = new Grid(3, 3);
    let rover = new Rover(1, 1, "N", grid);
    rover.addInstructions(["L", "L", "M"]);
    rover.completeMovementInstructions();
    let stringOutput = rover.generateRoverPositionString();
    expect(stringOutput).to.equal("1 0 S");
  })

  it ("should consider that rover position will not change if moving forwards will bring the rover to a negative x or y value", () => {
    let grid = new Grid(3, 3);
    let rover = new Rover(0, 0, "W", grid);
    rover.addInstructions(["M"]);
    rover.completeMovementInstructions;
    let stringOutput = rover.generateRoverPositionString();
    expect(stringOutput).to.equal("0 0 W");

    let rover2 = new Rover(0, 0, "S", grid);
    rover2.addInstructions(["M"]);
    rover2.completeMovementInstructions;
    let stringOutput2 = rover2.generateRoverPositionString();
    expect(stringOutput2).to.equal("0 0 S");
  })

  it ("should consider that rover position will not change if moving forwards will be outside of the grid maximum x or y value", () => {
    let grid = new Grid(3, 3);
    let rover = new Rover(3, 3, "E", grid);
    rover.addInstructions(["L", "R", "R", "L", "M"]);
    rover.completeMovementInstructions;
    let stringOutput = rover.generateRoverPositionString();
    expect(stringOutput).to.equal("3 3 E");

    let rover2 = new Rover(3, 3, "N", grid);
    rover2.addInstructions(["L", "R", "R", "L", "M"]);
    rover2.completeMovementInstructions;
    let stringOutput2 = rover2.generateRoverPositionString();
    expect(stringOutput2).to.equal("3 3 N");
  })

  it ("should consider that rover position will not change if the space in front of the rover is occupied by another rover", () => {
    let grid = new Grid(3, 3);
    let rover = new Rover(3, 3, "E", grid);
    rover.addInstructions(["L", "R", "R", "L", "M"]);
    let rover2 = new Rover(3, 2, "N", grid);
    rover.addInstructions(["M"]);
    grid.addRover(rover);
    let stringOutput2 = rover2.generateRoverPositionString();
    expect(stringOutput2).to.equal("3 2 N");
  })
})



// Rover Position String Method For Output

describe("#generateRoverPositionString", () => {
  it ("should return a string", () => {
    let grid = new Grid(3, 3);
    let rover = new Rover(3, 3, "W", grid);
    let stringOutput = rover.generateRoverPositionString();
    expect(typeof stringOutput).to.equal("string");
  })

  it ("should return a string with the x coordinate, y coordinate, and cardinal direction separated by spaces", () => {
    let grid = new Grid(3, 3);
    let rover = new Rover(3, 3, "W", grid);
    let stringOutput = rover.generateRoverPositionString();
    expect(stringOutput).to.equal("3 3 W");
  })

})



