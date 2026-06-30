const palindromes = function (string) {
  let simplifiedString = string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g, '').toLowerCase()
  let reversed = simplifiedString.split("").reverse();
  let reversedString = reversed.join("");
  if (simplifiedString == reversedString){
    return true;
  } else {
    return false;
  }
  console.log(string);
  console.log(reversedString);
};


// Do not edit below this line
module.exports = palindromes;
