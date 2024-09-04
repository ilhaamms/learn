function splitToArr(str) {
    if (str === "") {
        return `Data not available`;
    } else if (str == undefined) {
        return `Invalid input`;
    }

    let dataMhs = [];
    let nameMhs = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ";" || str[i] === "-") {
            dataMhs.push(nameMhs);
            nameMhs = "";
            continue;
        } else {
            if (i === 0 || str[i - 1] === ";" || str[i - 1] === "-") {
                nameMhs += str[i].toUpperCase();
            } else {
                nameMhs += str[i];
            }
        }

        if (i === str.length - 1) {
            dataMhs.push(nameMhs);
        }
    }

    return dataMhs;
}

console.log(splitToArr("annisa;dimitri-alvin;fajar-mirza;tandry"))
// console.log(splitToArr("ganang.prakoso-ivan.tjendra-haekal.yudhistira;ridza.adhandra-ganda.sipayung;diaz.kautsar"))
// console.log(splitToArr(""))
// console.log(splitToArr())

module.exports = splitToArr