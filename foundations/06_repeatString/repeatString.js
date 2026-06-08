const repeatString = function(string, numberOfTimesToRepeat) {
  let attempts = 0;
  let output = "";

  if (numberOfTimesToRepeat < 0) {
    return output += "ERROR";
  }

  while (attempts < numberOfTimesToRepeat ) {
    output += string;
    attempts++;
  }
  return output;
};


// Do not edit below this line
module.exports = repeatString;
