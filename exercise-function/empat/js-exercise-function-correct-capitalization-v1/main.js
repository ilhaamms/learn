// TODO: answer here

let correctCapitalization = paragraph => {

    let resultParagraph = "";

    for (let i = 0; i < paragraph.length; i++) {
        if (i === 0) {
            resultParagraph += paragraph[i].toUpperCase();
        } else if (paragraph[i - 2] === ".") {
            resultParagraph += paragraph[i].toUpperCase();
            // resultParagraph += paragraph[i + 1].toUpperCase();
        } else {
            resultParagraph += paragraph[i];
        }
    }

    return resultParagraph;
}

console.log(correctCapitalization("wlwk. haha"));

module.exports = correctCapitalization