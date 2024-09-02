// TODO: answer here
let minMax = str => {

    let min = Number(str[0]);
    let max = 0;

    for (let i = 0; i <= str.length; i++) {
        let number = Number(str[i]);

        if (number > max) {
            max = number;
        }

        if (number < min) {
            min = number;
        }
    }

    if (min === max) {
        return `Nilai terkecil dan terbesar adalah ${str}`;
    }

    return `Nilai terkecil adalah ${min}, dan terbesar adalah ${max}`;
}

console.log(minMax("9"));
// console.log(minMax("9746532"));

module.exports = minMax;