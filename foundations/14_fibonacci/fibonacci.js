const fibonacci = function(n) {
  let fibonnaciSequenceMaxIsN = [1, 1];

  if (n < 0){
    return "OOPS";
  }

  if (n == 0){
    return 0;
  };

  for (index = 1; index < n; index++){
    let sum = fibonnaciSequenceMaxIsN[index - 1] + fibonnaciSequenceMaxIsN[index];
    fibonnaciSequenceMaxIsN.push(sum);
  }

  return fibonnaciSequenceMaxIsN[n - 1];


};
// Do not edit below this line
module.exports = fibonacci;
