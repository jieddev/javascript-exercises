const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, number) => {
    return (total += number);
  }, 0);
};

const multiply = function (array) {
  return array.reduce((total, number) => {
    return (total *= number);
  }, 1);
};
console.log(multiply([1, 2, 3]))

const power = function (base, exponent) {
  let output = 1
  for(index = 0; index < exponent; index++){
    output *= base;
  }
  return output;
};

const factorial = function (number) {
  let output = 1;
  for(index = 1; index <= number; index++) {
    output *= index;
  }
  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
