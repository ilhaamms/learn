function vocalCounter(array) {
    let dataVokal = "";
    let arrayVokal = [];

    for (let vokal of array) {
        if (vokal === "A" || vokal === "a" || vokal === "I" ||
            vokal === "i" || vokal === "U" || vokal === "u" ||
            vokal === "E" || vokal === "e" || vokal === "O" || vokal === "o"
        ) {
            dataVokal += vokal;
            arrayVokal.push(vokal);
        }
    }

    if (arrayVokal.length === 0) {
        return `Tidak ada huruf vokal yang ditemukan`;
    }

    return `Jumlah vokal yang ditemukan sebanyak ${arrayVokal.length} berupa ${dataVokal}`;
}

console.log(vocalCounter(['x', 'A', 5, 'o', 1, 'T', 'b']));
console.log(vocalCounter([-10, 'E', 'e', 'z', 'p', 'i', 4]));
console.log(vocalCounter(['q', 'W', 'r', 't', 'Y']));

module.exports = vocalCounter
