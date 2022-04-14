// Write your tests here!
const expect = require('chai').expect;
const polybiusFunc = require('../src/polybius.js').polybius;

describe("polybiusFunc tests written by team Five", () => {
  it("should be a function", () => {
    expect(polybiusFunc).to.be.a("function");
  });
  describe("encode a message", () => {
    it("should encode a message by translating each letter to number p", () => {
      const input = "watch";
      const expected = "2511443132";
      const actual = polybiusFunc(input);
      expect(actual).to.equal(expected);
    });
    it("should translate both 'i' and 'j' to 42", () => {
      const input = "watching";
      const expected = "2511443132423322";
      const actual = polybiusFunc(input);
      expect(actual).to.equal(expected);
    });
    it("should leave spaces as is", () => {
      const input = "watching movies";
      const expected = "2511443132423322 234315425134";
      const actual = polybiusFunc(input);
      expect(actual).to.equal(expected);
    });
    it("should treat capitalized letter as lowercased", () => {
      const input = "Watching Movies";
      const expected = "2511443132423322 234315425134";
      const actual = polybiusFunc(input);
      expect(actual).to.equal(expected);
    });
  });
  describe("decode a message", () => {
    it("should encode a message by translating each letter to number p", () => {
      const input = "2511443132";
      const expected = "watch";
      const actual = polybiusFunc(input, false);
      expect(actual).to.equal(expected);
    });
    it("should translate both 'i' and 'j' to 42", () => {
      const input = "2511443132423322";
      const actual = polybiusFunc(input, false);
      expect(actual).to.include('i');
      expect(actual).to.include('j');
    });
    it("should leave spaces as is", () => {
      const input = "2511443132423322 234315425134";
      const expected = "watchijng movijes";
      const actual = polybiusFunc(input, false);
      expect(actual).to.equal(expected);
    });
    it("should return false if the length is odd", () => {
      const input = "2511443132423322 23431542513";
      const actual = polybiusFunc(input, false);
      expect(actual).to.be.false;
    });
  });
});
