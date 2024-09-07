function dataSelection(data, amount, start) {

    let dataArray = new Array();

    if (data.length === 0) {
        return `Data not found`;
    } else if (start < 0) {
        return `Starting number cannot be below 0`;
    } else if (amount < 1) {
        return `Minimum amount is 1`;
    } else if (typeof amount === "string" || typeof start === "string") {
        return `Invalid command`;
    } else {

        for (let i = 0; i < data.length; i++) {
            if (dataArray.length === amount) {
                break;
            } else {
                dataArray.push(data[start - 1]);
                start++;
                // dataArray.push(data[start]);
            }
        }
    }

    return dataArray;
}

console.log(dataSelection(["Andrean", "Patra", "Ardi", "Rudy"], 3, 2));
// console.log(dataSelection(["Deny", "Ganjar", "Raam", "Imam", "Eddy", "Afis"], 4, 1));
// console.log(dataSelection([97, 44, 21, 76, 10, 1, 33], 2, -1));
// console.log(dataSelection(["Tegar", "Miranda", "Wulan"], 0, 3));
// console.log(dataSelection(["Fauzan", "Uli", "Vika"], "1", "3"));
// console.log(dataSelection([], 1, 3));

module.exports = dataSelection
