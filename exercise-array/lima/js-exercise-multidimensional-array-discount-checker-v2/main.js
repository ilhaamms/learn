function discountChecker(costumers, date) {

    let result = [];
    let arrDate = date.split("-");
    date = Number(arrDate[0]);

    costumers.forEach(costumer => {
        let arrPrice = costumer[0].split(" ");
        let price = Number(arrPrice[1]);
        let statusMember = costumer[1];

        if (statusMember === "member") {
            result.push(costumer);
        } else if (date % 2 === 0) {
            if (price % 2 === 0) {
                result.push(costumer);
            }
        } else if (date % 2 !== 0) {
            if (price % 2 !== 0) {
                result.push(costumer);
            }
        }
    });

    let data = 238 % 28;
    console.log("DATAA : ", data);
    return result;
}

let costumers = [
    ["$ 228", "member"],
    ["$ 19", "non-member"],
    ["$ 238", "non-member"],
    ["$ 49", "member"]
]

console.log(discountChecker(costumers, "28-10-2022"))

// var costumers2 = [
//     ["$ 754", "member"],
//     ["$ 233", "member"],
//     ["$ 31", "non-member"],
//     ["$ 332", "non-member"]
// ]

// console.log(discountChecker(costumers2, "11-06-2022"))

module.exports = discountChecker
