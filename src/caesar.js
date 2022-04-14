// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    let arr = [];
    //check if the shift is within the allowed range;
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false;
    if (!encode) shift = -shift;

    for (let letter of input) {
      letter = letter.toLowerCase();
      //if letter is not in the range of ascii lowercase alphabet, return as itself;
      if (letter.charCodeAt() < 97 || letter.charCodeAt() > 122) {
        arr.push(letter);
      } //allow shifting if total shift value is over 122
      else if (letter.charCodeAt() + shift > 122) {
        arr.push(String.fromCharCode(letter.charCodeAt() - 26 + shift));
      } //allow shifting if total shift value is below 97
      else if (letter.charCodeAt() + shift < 97) {
        arr.push(String.fromCharCode(letter.charCodeAt() + 26 + shift));
      } //allow shifting if total shift value within [97:122]
      else arr.push(String.fromCharCode(letter.charCodeAt() + shift));
    }

    return arr.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };