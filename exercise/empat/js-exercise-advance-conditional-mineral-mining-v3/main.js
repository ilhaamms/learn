function mineralMining(mineral, miningPower, duration, cost) {

  let timeToGet = 0;
  let marketPrice = 0;
  if (mineral === "gold") {
    timeToGet = 30;
    marketPrice = 1;
  } else if (mineral === "silver") {
    timeToGet = 20;
    marketPrice = 0.6;
  } else if (mineral === "coper") {
    timeToGet = 5;
    marketPrice = 0.3;
  } else if (mineral === "uranium") {
    timeToGet = 75;
    marketPrice = 3;
  } else if (mineral === "platinum") {
    timeToGet = 15;
    marketPrice = 2;
  } else if (mineral === "titanium") {
    timeToGet = 55;
    marketPrice = 1.5;
  } else {
    return `Invalid mineral name`
  }

  let income = (duration / timeToGet) * miningPower
  let totalIncomeTambang = income * marketPrice

  if (cost === totalIncomeTambang) {
    return `Mineral mining get nothing`
  }

  if (cost > totalIncomeTambang) {
    return `Mineral mining at a loss ${totalIncomeTambang - cost}`
  } else if (cost < totalIncomeTambang) {
    return `Mineral mining profit ${totalIncomeTambang - cost}`
  }
}

console.log(mineralMining('gold', 10, 70, 59)); // Mineral mining at a loss -35.666666666666664
console.log(mineralMining('rock', 10, 70, 40)); // Invalid mineral name
console.log(mineralMining('uranium', 10, 70, 150)); // Mineral mining at a loss -122
console.log(mineralMining('silver', 33, 200, 30)); // Mineral mining profit 168
console.log(mineralMining('titanium', 25, 100, 200)); // Mineral mining at a loss -131.8181818181818
console.log(mineralMining('gold', 1, 100, 15)); // Mineral mining at a loss -11.666666666666666
console.log(mineralMining('titanium', 20, 350, 150)); // Mineral mining at a loss 40.90909090909091

module.exports = mineralMining;
