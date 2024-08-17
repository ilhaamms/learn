function printNumber(totalNumber) {

    let result = "";
    for (let i = 1; i <= totalNumber; i++) {
        if (result.length === totalNumber) {
            break;
        }

        if (i > 3) {
            i = 0;
        } else {
            result += i;
        }
    }


    return result;
}
// 4, 7, 10
// console.log(printNumber(2));
// console.log(printNumber(3));
console.log(printNumber(6));
// console.log(printNumber(10));
// console.log(printNumber(30));

module.exports = printNumber
