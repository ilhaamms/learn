function generateParenthesesPair(numberOfPairs) {

  let mainTandaKurung = "";
  let leftTandaKurung = "";
  let rightTandaKurung = "";

  for (let i = 1; i <= numberOfPairs; i++) {
    leftTandaKurung += "(";
    rightTandaKurung += ")";
    mainTandaKurung = leftTandaKurung + rightTandaKurung;
    // if (i === 1) {
    //   mainTandaKurung += "()";
    // } else {
    //   mainTandaKurung[0] = leftTandaKurung + mainTandaKurung;
    //   mainTandaKurung += rightTandaKurung;
    // }
  }

  return mainTandaKurung;
}

// console.log(generateParenthesesPair(0)); // ''
// console.log(generateParenthesesPair(1)); // '()'
// console.log(generateParenthesesPair(2)); // '(())'
console.log(generateParenthesesPair(3)); // '((()))'
// console.log(generateParenthesesPair(12)); // '(((((((((((())))))))))))'

module.exports = generateParenthesesPair;
