"use strict";

// Tests for the grid input processor class

const { expect } = require("chai");
const GridInputProcessor = require("../modules/grid-input-processor.js");

describe("Grid Input Processor", () => {
  it ("should exist", () => {
    expect(GridInputProcessor).to.not.be.undefined;
  })
})


describe("#generateGridInfoObject", () => {
  it ("should return an object with values that match keys for x and y", () => {
    const processor = new GridInputProcessor;
    const stringInput = "5 5";
    const answerObject = {x: 5, y: 5};
    const gridInfo = processor.generateGridInfoObject(stringInput);
    expect(gridInfo).to.eql(answerObject);
  })

  it ("should return false if there are more than 2 values separated by spaces in the input string", () => {
    const processor = new GridInputProcessor;
    const stringInput = "5 5 5";
    const gridInfo = processor.generateGridInfoObject(stringInput);
    expect(gridInfo).to.be.false;
  })

  it ("should return false if there are less than 2 values separated by spaces in the input string", () => {
    const processor = new GridInputProcessor;
    const stringInput = "5";
    const gridInfo = processor.generateGridInfoObject(stringInput);
    expect(gridInfo).to.be.false;
  })

})