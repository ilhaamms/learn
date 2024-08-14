// yaitu mengevaluasi pernyataan
//  falsy yaitu Seperti false, 0, -0, "", null, undefined, dan NaN. Selain dari nilai yang disebutkan,
// semuanya dikonversi ke nilai true.

let a = 2;

// operator strict equal, jadi kalau pake tanda = nya 3x, 
// maka yang dibandingkan adalah tipe data dulu baru valuenya
console.log(a === 2); // result: true
console.log(a === "2"); // result: false

console.log(0 === false); // result: false
console.log("" === false); // result: false