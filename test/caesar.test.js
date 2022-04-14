// Write your tests here!
const expect = require('chai').expect;
const Caesar = require('../src/caesar.js').caesar;

describe("caesarModule tests written by team Five", () => {
  it("should be a function", () => {
    expect(Caesar).to.be.a("function");
  });
  describe("return false if shift amount is 0, or above 25, or less than -25", () => {
    const input = "teamFive";
    const expected = false;
    it("returns false if shift is not passed in", () => {
        const actual = Caesar(input);
        expect(actual).to.equal(expected);
      });
    it("returns false if shift is 0", () => {
      const shift = 0;
      const actual = Caesar(input, shift);
      expect(actual).to.equal(expected);
    });
    it("returns false if shift is more than 25", () => {
      const shift = 26;
      const actual = Caesar(input, shift);
      expect(actual).to.equal(expected);
    });
    it("returns false if shift is less than -25", () => {
      const shift = -26;
      const actual = Caesar(input, shift);
      expect(actual).to.equal(expected);
    });
  });
  //
  describe("caesar function encodes properly", () => {
    it("should accept capitalized letters and return the code in lowercase", () => {
      const inputOne = "teamfive";
      const inputTwo = "TEAMFIVE";
      const shift = 5;
      const actual = Caesar(inputOne, shift) === Caesar(inputTwo, shift);
      const expected = true;
      expect(actual).to.equal(expected);
    });
    it("should handle shifts that go over the length of the array", () => {
      const input = "zebra";
      const shift = 3;
      const actual = "cheud";
      const expected = Caesar(input, shift);
      expect(actual).to.equal(expected);
    });
    it("should handle shifts that go below the length of the array", () => {
      const input = "zebra";
      const shift = -3;
      const actual = "wbyox";
      const expected = Caesar(input, shift);
      expect(actual).to.equal(expected);
    });
    it("should code strings that contain non-alphabetical characters", () => {
      const input = "team five!";
      const shift = 5;
      const expected = "yjfr knaj!";
      const actual = Caesar(input, shift);
      expect(actual).to.equal(expected);
    });
  });
  describe("caesar function decodes properly", () => {
    it("should handle shifts that go over the length of the array", () => {
      const input = "cheud";
      const shift = 3;
      const actual = "zebra";
      const expected = Caesar(input, shift, false);
      expect(actual).to.equal(expected);
    });
    it("should handle shifts that go below the length of the array", () => {
      const input = "wbyox";
      const shift = -3;
      const actual = "zebra";
      const expected = Caesar(input, shift, false);
      expect(actual).to.equal(expected);
    });
    it("should accept capitalized letters and decode strings that contain non-alphabetical characters", () => {
        const input = "Team Five!";
        const shift = 3;
        const actual = Caesar(input, shift, false);
        const expected = 'qbxj cfsb!';
        expect(actual).to.equal(expected);
      });
  });
});