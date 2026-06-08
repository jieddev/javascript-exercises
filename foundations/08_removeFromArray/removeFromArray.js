const removeFromArray = function(arr, ...numbersToBeTakenOut) {
  return arr.filter(number => {return !numbersToBeTakenOut.includes(number)});
};
// Do not edit below this line
module.exports = removeFromArray;
