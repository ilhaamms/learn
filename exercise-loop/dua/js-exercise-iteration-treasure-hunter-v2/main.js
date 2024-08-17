function trasureHunter(dailyLog) {
  let valueHartaKarun = 0;

  for (let i = 0; i < dailyLog.length; i++) {
    if (dailyLog[i] == "$") {
      valueHartaKarun += 100;
    } else if (dailyLog[i] == "x") {
      if (valueHartaKarun > 10) {
        valueHartaKarun -= 10;
      } else {
        valueHartaKarun = 0;

      }
    } else if (dailyLog[i] == "#") {
      valueHartaKarun -= valueHartaKarun * 0.50;
    }
  }

  return valueHartaKarun;
}



// console.log(trasureHunter("$x$#x$")); // 185
// console.log(trasureHunter("$$#x$$")); // 290
console.log(trasureHunter("xx$#$#$#$###xx")); // 160
// console.log(trasureHunter("xx$#$#$#$###xx")); // 3.4375

module.exports = trasureHunter;
