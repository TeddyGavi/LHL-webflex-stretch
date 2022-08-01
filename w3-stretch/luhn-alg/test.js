const chai = require("chai")
const expect = chai.expect
const check = require(".")
const checkLuhn = require(".")

describe("#Function check which implements the Luhn Algorithm to validate various ID numbers", () => {


  it("should return false if the input number is not valid", () => {
    expect(checkLuhn("?h123.!!")).to.be.false;
  })

  it("should return true, if the number is valid according to Luhn Alg", () => {
    expect(checkLuhn(79927398713)).to.be.true
  })

  it("should return true, if the number is valid according to Luhn Alg", () => {
    expect(checkLuhn(49927398716)).to.be.true
  })

  it("should return false, if the number is not valid according to Luhn Alg", () => {
    expect(checkLuhn(49927398717)).to.be.false
  })

  it("should return false, if the number is not valid according to Luhn Alg", () => {
    expect(checkLuhn(1234567890123456)).to.be.false
  })

  it("should return true, if the number is valid according to Luhn Alg", () => {
    expect(checkLuhn(4222222222222)).to.be.true
  })

  it("should return true, if the number is valid according to Luhn Alg", () => {
    expect(checkLuhn(4408041234567893)).to.be.true
  })

  it("should return true, if the number is valid according to Luhn Alg", () => {
    expect(checkLuhn(38520000023237)).to.be.true
  })

})


/* 1234567890123456 is not valid
4408041234567893 is valid
38520000023237 is valid
4222222222222 is valid */

