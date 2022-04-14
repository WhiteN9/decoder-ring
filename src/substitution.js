// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    let result = "";
    //check if alphabet exists and within range
    if (!alphabet || alphabet.length !== 26) return false;
    let alphabetArray = alphabet.split("");

    //check if alphabet argument has repeating value
    let sortedAlphabet = alphabetArray.sort();
    for (let i = 0; i < sortedAlphabet.length; i++) {
      if (sortedAlphabet[i] === sortedAlphabet[i + 1]) {
        return false;
      }
    }

    //pair the substitution alphabet with the regular alphabet
    let matchAlphabet;
    if (!encode) {
      matchAlphabet = alphabetArray.reduce(
        (previousValue, currentValue, index) => {
          previousValue[alphabet[index]] = String.fromCharCode(97 + index);
          return previousValue;
        },
        {}
      );
    } else {
      matchAlphabet = alphabetArray.reduce(
        (previousValue, currentValue, index) => {
          previousValue[String.fromCharCode(97 + index)] = alphabet[index];
          return previousValue;
        },
        {}
      );
    }

    //run through input, if input matched with a key in matchAlphabet, return the value of that key
    for (let i = 0; i < input.length; i++) {
      letter = input[i].toLowerCase();
      if (!(letter in matchAlphabet)) {
        result += input[i];
      } else {
        result += matchAlphabet[letter];
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };