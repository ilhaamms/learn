// TODO: answer here

let calcAge = (age, data) => {
    if (age < 1) {
        return `Age cannot be under 1 year`;
    } else if (data === "months") {
        return age * 12;
    } else {
        return age * 365;
    }
}

module.exports = calcAge;