function resistorValue(bandColor1, bandColor2, bandColor3, bandColor4) {

  let significantFigure = "";
  let multiplier;
  let tolerance;
  let resultResistor;
  let resultOutput;

  switch (bandColor3) {
    case "black":
      multiplier = 1;
      break;
    case "brown":
      multiplier = 10;
      break;
    case "red":
      multiplier = 100;
      break;
    case "orange":
      multiplier = 1000;
      break;
    case "yellow":
      multiplier = 10000;
      break;
    case "green":
      multiplier = 100000;
      break;
    case "blue":
      multiplier = 1000000;
      break;
    case "violet":
      multiplier = 10000000;
      break;
  }

  switch (bandColor4) {
    case "black":
      tolerance = "±20%";
      break;
    case "brown":
      tolerance = "±1%";
      break;
    case "red":
      tolerance = "±2%";
      break;
    case "gold":
      tolerance = "±5%";
      break;
    case "silver":
      tolerance = "±10%";
      break;
  }

  if (bandColor1 === "black") {
    significantFigure += "0";
  }

  if (bandColor1 === "brown") {
    significantFigure += "1";
  }

  if (bandColor1 === "red") {
    significantFigure += "2";
  }

  if (bandColor1 === "orange") {
    significantFigure += "3";
  }

  if (bandColor1 === "yellow") {
    significantFigure += "4";
  }

  if (bandColor1 === "green") {
    significantFigure += "5";
  }

  if (bandColor1 === "blue") {
    significantFigure += "6";
  }

  if (bandColor1 === "violet") {
    significantFigure += "7";
  }

  if (bandColor1 === "grey") {
    significantFigure += "8";
  }

  if (bandColor1 === "white") {
    significantFigure += "9";
  }

  if (bandColor2 === "black") {
    significantFigure += "0";
  }

  if (bandColor2 === "brown") {
    significantFigure += "1";
  }

  if (bandColor2 === "red") {
    significantFigure += "2";
  }

  if (bandColor2 === "orange") {
    significantFigure += "3";
  }

  if (bandColor2 === "yellow") {
    significantFigure += "4";
  }

  if (bandColor2 === "green") {
    significantFigure += "5";
  }

  if (bandColor2 === "blue") {
    significantFigure += "6";
  }

  if (bandColor2 === "violet") {
    significantFigure += "7";
  }

  if (bandColor2 === "grey") {
    significantFigure += "8";
  }

  if (bandColor2 === "white") {
    significantFigure += "9";
  }

  resultResistor = parseInt(significantFigure) * multiplier
  resultOutput = `${resultResistor} ohm ${tolerance}`

  return resultOutput
}

console.log(resistorValue('brown', 'black', 'red', 'gold'));
// console.log(resistorValue('red', 'red', 'red', 'gold'));
// console.log(resistorValue('yellow', 'violet', 'green', 'silver'));
// console.log(resistorValue('blue', 'grey', 'green', 'silver'));

module.exports = resistorValue;
