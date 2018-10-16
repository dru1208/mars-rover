"use strict"

const { expect } = require('chai');
const Grid = require('../grid.js');

describe("Grid", () => {
  it ("should exist", () => {
    expect(Grid).to.not.be.undefined;
  })
})