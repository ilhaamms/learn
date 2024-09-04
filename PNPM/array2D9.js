let ages = [20, 21, 22, 23];

// PALING PENTING SERING DIGUNAKAN YAITU MAP DAN FILTER

// value ini adalah data element array yaitu 20,21,22,23
// kemudian index itu yaa index, dan arraynya adalah array si ages
// jadi filter ini ngelooping semua data yang ada di array
console.log("FILTER");
let olderAges = ages.filter((value, index, array) => { // kalau index sama arraynya gadipake di param, maka bisa dihapus aja, jadi tingal value doang
    return value > 21; // simplenya bisa pake cara ini

    // atau pake if statement seperti ini
    // if (value > 21) {
    //     return true;
    // }

    // return false;
})

console.log(ages);
console.log(olderAges);

console.log("\nEVERY");
// Apabila ada satu saja element yang tidak sesuai dengan kriteria, maka iteration langsung berhenti.
let isOlld = ages.every(age => { // every ini mengecek apakah semua elementnya memenuhi kriteria yaitu diatas 20 semua umurnya
    return age > 20;
})

console.log(isOlld);

console.log("\nSOME");
// iterasi akan langsung berhenti jika salah satu array item memenuhi kriteria yang ditentukan.
let isOlld2 = ages.some(age => { // some ini mengecek apakah beberapa elementnya memenuhi kriteria yaitu dibawah 20 semua umurnya
    return age <= 20;
})
console.log(isOlld2);

console.log("\nREDUCE");
//  jika argument ke-2 dari method reduce() tidak tersedia maka akan diisi dengan nilai array[0].
// ini sama aja kayak, accum adalah init value yang nilainya adalah 0(dari b, 0)
// kemudian ditambah sama b
// let totalAges = ages.reduce((accum, b) => accum + b, 0);
// atau sama aja kayak gini
let totalAges = ages.reduce((accum, b) => {
    return accum + b
}, 0);

console.log(totalAges);


let names = ["Ilham", "Hamzah", "Zahra", "Imam"];
let namesWithI = names.filter((value, index, array) => {
    return value.startsWith("I");
})

console.log(names);
console.log(namesWithI);

console.log("\nFILTER 2 dimensi");
let people = [
    ["Ilham", 23, "Jakarta"],
    ["Hamzah", 22, "Bekasi"],
    ["Zahra", 21, "Malang"],
    ["Imam", 20, "Bandung"]
]

let olderPeople = people.filter(value => {
    return value[1] > 21;
})

console.log(olderPeople);

// forEach() tidak bisa dihentikan di tengah jalan dengan keyword break 
// dan tidak bisa lanjut ke iterasi selanjutnya dengan keyword continue.
console.log("\nFOREACH"); // biasanya foreach untuk ngeprint, nyimpen ke database, nembak API
let countries = ["Indonesia", "Arab", "Australia"];
countries.forEach(country => {
    console.log(country.toLowerCase());
})

console.log("\nFOR OF ini sama aja kayak foreach");
for (let country of countries) {
    console.log(country);
}

console.log("\nMAP"); // biasanya foreach untuk ngeprint, nyimpen ke database, nembak API
let countriesMap = ["Indonesia", "Arab", "Australia"];
let countryMap = countriesMap.map(country => {
    return country.toUpperCase();
})
console.log(countryMap);

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let totalNumber = number.reduce((accum, b) => {
    return accum + b
}, 0);
console.log(totalNumber);

let multiplied = number.reduce((accum, b) => {
    return accum * b;
}, 1)

console.log(multiplied);