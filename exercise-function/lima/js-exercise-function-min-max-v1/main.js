// TODO: answer here
let minMax = str => {
    if (str.length === 1) {
        return `Nilai terkecil dan terbesar adalah ${str}`;
    }

    let min = 0;
    let max = 0;
    for (let i = 0; i <= str.length; i++) {
        let number = Number(str);

        if (number > max) {
            max = number;
        }

        if (number < min) {
            min = number;
        }
    }

    return `Nilai terkecil adalah ${min}, dan terbesar adalah ${max}`;
}

module.exports = minMax;