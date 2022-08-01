const chai = require("chai")
const expect = chai.expect;
const maxProfit = require("./index.js")


describe("#This function should return the max amount of profit for a given list of values, if the profit is 0 or less, return -1", () => {


  it("should return the max profit given a list of values", () => {
    expect(maxProfit([45, 24, 35, 31, 40, 38, 11])).to.equal(16);
  })

  it("should return -1 if no profit can be made", () => {
    expect(maxProfit([0, 0, 0, 0, 0])).to.equal(-1);
  })

  it("should return the max profit given a list of values", () => {
    expect(maxProfit([45, 24, 35, 31, 44, 38, 11])).to.equal(20);
  })

  it("should return the max profit given a list of values", () => {
    expect(maxProfit([45, 24, 35, 31, 54, 38, 11, 5, 2, 1])).to.equal(30);
  })

  it("should return -1 if no profit can be made", () => {
    expect(maxProfit([45])).to.equal(-1);
  })


})