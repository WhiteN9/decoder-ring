// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  //declare an Object variable with the alphabet characters being the key name and their value is an int
  const square = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };
  function polybius(input, encode = true) {
    // your solution code here
    //return false if the encode argument was passed in but not a boolean;
    if (!typeof encode === Boolean) return false;
    let result = ""; //global result variable;
    if (encode) {
      //loop over the string, if it match with any of the keys, return the key's value;
      for (const element of input) {
        if (Object.keys(square).includes(element.toLowerCase())) {
          result += square[element.toLowerCase()];
        } else result += element;
      }
      return result;
    } else {
      //check if the passed in string of numbers is an odd amount of characters;
      if (!(input.replace(" ", "").length % 2 == 0)) {
        return false;
      }
      //pass into an new array in pair of characters;
      const splitTheNumbers = [];
      for (let i = 0; i < input.length; i += 2) {
        if (input[i] === " " || input[i + 1] === undefined) {
          splitTheNumbers.push(input[i]);
          i--;
        } else splitTheNumbers.push(parseInt(input[i] + input[i + 1]));
      }
      //loop over the splitTheNumbers array, if it match with any of the value, return the key name, else pass in as itself;
      for (const element of splitTheNumbers) {
        if (Object.values(square).includes(element)) {
          for (const key in square) {
            if (element === square[key]) {
              result += key;
            }
          }
        } else result += element;
      }
      return result;
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };