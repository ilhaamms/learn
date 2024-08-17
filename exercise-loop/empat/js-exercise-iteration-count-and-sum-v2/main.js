function countAndSum(number) {

  let value = 1;
  let result = 0;

  for (let i = 1; i <= number; i++) {
    // if (i === number) {
    //   break;
    // }

    if (value > 3) {
      value = 1;
    }
    result += value;


    value++;
  }

  return result;
}

// console.log(countAndSum(5)); // 9
console.log(countAndSum(10)); // 19
// console.log(countAndSum(100)); // 199
// console.log(countAndSum(17)); // 33
// console.log(countAndSum(19)); // 0

module.exports = countAndSum;
