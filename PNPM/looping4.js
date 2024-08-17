let i = 1;

console.log("While loop");
while (i <= 5) {
    console.log(i);
    i++;
}


console.log("\nfor loop");
for (let j = 1; j <= 10; j += 2) {
    console.log(j);
}

console.log("\nPenjumlahan");
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(`Hasil penjumlahan : ${sum}`);

console.log("\nFaktorial");
let result = 1;
for (let i = 5; i >= 1; i--) {
    result *= i;
}
console.log(`Hasil Faktorial : ${result}`);

console.log("\ncek bilangan prima");
// 1 bukan bilangan prima
// bilangan prima adalah bilangan yang tidak bisa dibagi oleh bilangan lain selain 1 dan dirinya sendiri
let value = 11;
isPrime = true;

for (let i = 2; i <= value - 1; i++) {
    if (value % i === 0) {
        isPrime = false;
        break; // ada juga continue, maka langsung ke post statement
    }
}
console.log(`${value}, ${isPrime}`);

console.log("\nnested loop");
/* 
    1
    12
    123
*/
// let resultLoop = ""
// for (let i = 1; i <= 1; i++) {
//     for (let j = 1; j <= 10; j++) {
//         if (j > 1) {
//             resultLoop += " " + j.toString();
//         } else {
//             resultLoop += i.toString();
//         }

//         console.log(resultLoop);
//     }
// }

/* 
    1
    12
    123
*/
let line = "";
for (let i = 1; i <= 5; i++) {
    line = "";
    for (let j = 1; j <= i; j++) {
        line += j + " ";
    }

    console.log(line);
    // console.log("line");
}


// cek semua bilangan prima sampai n
console.log("\nloop data bilangan prima");
let n = 11;
// let resultPrime = "";

// for (let i = 2; i <= n; i++) {
//     for (let j = 2; j <= i - 1; j++) {
//         if (i % j === 0) {
//             isPrima = false;
//         }
//     }

//     if (isPrima) {
//         console.log(i);
//     }
// }

for (let i = 2; i <= n; i++) {
    let isPrima = true;
    for (let j = 2; j <= i - 1; j++) {
        if (i % j === 0) {
            isPrima = false;
        }
    }

    if (isPrima) {
        console.log(i);
    }
}

// console.log(9 % 1);

// 2,3,5,7,11

// console.log(`Bilangan Prima : ${resultPrime}`);