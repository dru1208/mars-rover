"use strict"

const { expect } = require('chai');
const Grid = require('../grid.js');


describe("Grid", () => {
  it ("should exist", () => {
    expect(Grid).to.not.be.undefined;
  })
})


describe("New Grid x and y value", () => {
  it ("should create a new instance of Grid with an x value of the first argument and a y value of the second argument", () => {
    let Grid1 = new Grid(3, 5);
    expect(Grid1.x).to.equal(3);
    expect(Grid1.y).to.equal(5);

    let Grid2 = new Grid(8, 2);
    expect(Grid2.x).to.equal(8);
    expect(Grid2.y).to.equal(2);
  })
})