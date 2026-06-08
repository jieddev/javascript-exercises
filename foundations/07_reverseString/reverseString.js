const reverseString = function(string) {
  let reversedString = "";
  let splittedString = string.split('');
  for (let i = splittedString.length - 1; i >= 0; i--){
    reversedString += splittedString[i];
  }

  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
