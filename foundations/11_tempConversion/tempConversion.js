const convertToCelsius = function(temperature) {
  let decimalCelcius = (temperature - 32) * 5 / 9;

  if (decimalCelcius == 0){
    return 0;
  } else {
    return parseFloat(decimalCelcius.toFixed(1));
  }
};

const convertToFahrenheit = function(temperature) {
  let fahrenheit = temperature * (9 / 5) + 32;
  if ( fahrenheit == 0){
    return 0;
  } else {
    return parseFloat(fahrenheit.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
