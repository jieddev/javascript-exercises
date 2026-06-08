const sumAll = function(a, b) {
  let large_number = 0;
  let smallest_number = 0;

  if (a < 0 || b < 0) {
    return 'ERROR';
  }

  if (!Number.isInteger(a) || !Number.isInteger(b)){
    return 'ERROR';
  }

  if (a > b) {
    large_number = a;
    smallest_number = b;
  } else {
    large_number = b;
    smallest_number = a;
  }

  let arr = [];

  for (let i = smallest_number; i <= large_number; i++){
    arr.push(i);
  }

  return arr.reduce((accumulator, initialValue) => {
    return accumulator + initialValue;
  });


};

// Do not edit below this line
module.exports = sumAll;
