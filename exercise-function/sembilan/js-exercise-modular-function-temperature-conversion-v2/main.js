function kelvinToCelsius(kelvin) {
  let result = kelvin - 273.15;
  let data = result.toFixed(2);
  return Number(data);
}

function kelvinToFahrenheit(kelvin) {
  // your code here
  let result = (kelvin - 273.15) * 9 / 5 + 32;
  let data = result.toFixed(2);
  return Number(data);
}

function celsiusToFahrenheit(celsius) {
  // your code here
  let result = (celsius * 9 / 5) + 32;
  let data = result.toFixed(2);
  return Number(data);
}

function celsiusToKelvin(celsius) {
  // your code here
  let result = celsius + 273.15;
  let data = result.toFixed(2);
  return Number(data);
}

function fahrenheitToKelvin(fahrenheit) {
  // your code here
  let result = (fahrenheit - 32) * 5 / 9 + 273.15;
  let data = result.toFixed(2);
  return Number(data);
}

function fahrenheitToCelsius(fahrenheit) {
  // your code here
  let result = (fahrenheit - 32) * 5 / 9;
  let data = result.toFixed(2);
  return Number(data);
}

function convertTemperature(temperature, initialUnit, finalUnit) {
  if (initialUnit === 'K' && finalUnit === 'C') {
    return kelvinToCelsius(temperature);
  } else if (initialUnit === 'K' && finalUnit === 'F') {
    return kelvinToFahrenheit(temperature);
  } else if (initialUnit === 'C' && finalUnit === 'F') {
    return celsiusToFahrenheit(temperature);
  } else if (initialUnit === 'C' && finalUnit === 'K') {
    return celsiusToKelvin(temperature);
  } else if (initialUnit === 'F' && finalUnit === 'K') {
    return fahrenheitToKelvin(temperature);
  } else if (initialUnit === 'F' && finalUnit === 'C') {
    return fahrenheitToCelsius(temperature);
  }
}

console.log(convertTemperature(0, 'C', 'K')); // 273.15
console.log(convertTemperature(0, 'C', 'F')); // 32

console.log(convertTemperature(0, 'F', 'C')); // -17.78
console.log(convertTemperature(0, 'F', 'K')); // 255.37

console.log(convertTemperature(0, 'K', 'C')); // -273.15
console.log(convertTemperature(0, 'K', 'F')); // -459.67

module.exports = {
  kelvinToCelsius,
  kelvinToFahrenheit,
  celsiusToFahrenheit,
  celsiusToKelvin,
  fahrenheitToKelvin,
  fahrenheitToCelsius,
  convertTemperature,
};
