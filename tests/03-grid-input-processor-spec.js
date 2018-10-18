const { expect } = require("chai");
const GridInputProcessor = require("../grid-input-processor.js");

describe("Grid Input Processor", () => {
  it ("should exist", () => {
    expect(GridInputProcessor).to.not.be.undefined;
  })
})


describe("#generateGridInfoObject", () => {
  it ("should return an object with values that match keys for x and y", () => {
    let processor = new GridInputProcessor;
    let stringInput = "5 5";
    let answerObject = {x: 5, y: 5};
    gridInfo = processor.generateGridInfoObject(string);
    expect(gridInfo).to.eql(answer);
  })

  it ("should return false if there are more than 2 values separated by spaces in the input string", () => {

  })

  it ("should return false if there are less than 2 values separated by spaces in the input string", () => {

  })
})