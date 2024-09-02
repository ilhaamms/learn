// TODO: answer here

let shortName = (name, options) => {

    let dataName = name.split(" ");
    let fixName = "";

    if (dataName.length <= 1) {
        return `Invalid Name`;
    }

    if (options === "first") {
        fixName = dataName[0].slice(0, 1).toUpperCase() + ". " + dataName[1];
    } else if (options === "last") {
        fixName = dataName[0] + " " + dataName[1].slice(0, 1).toUpperCase() + ".";
    } else if (options === "full") {
        fixName = name;
    }

    return fixName;
}

console.log(shortName("Djarot Purnomo", "last"));

module.exports = shortName