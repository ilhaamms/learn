// TODO: answer here
let addNumber = (numStr, options) => {

    let value = "";

    if (options === "right") {
        for (i = numStr.length - 1; i >= 0; i--) {
            let resultValue = 0;


            if (i === 0) {
                break;
            }

            resultValue = Number(numStr[i]) + Number(numStr[i - 1]);
            value += resultValue;

        }
    } else {
        for (i = 0; i < numStr.length; i++) {
            let resultValue = 0;

            if (i === numStr.length - 1) {
                break;
            }

            resultValue = Number(numStr[i]) + Number(numStr[i + 1]);
            value += resultValue;
        }
    }

    return value;
}

// console.log(addNumber("012345", "left"));
console.log(addNumber("672318", "left"));

module.exports = addNumber;
