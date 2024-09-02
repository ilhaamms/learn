// arrow function adalah syntax lebih sederhana untuk membuat function
// biasanya ini lebih sering dipake dev js kalau mau buat function

function sayHello(name, greeting) {
    console.log(`${greeting} ${name}`);
}

sayHello("Ilham", "Selamat malam");

// ini adalah arrow function, karena ada 2 param maka pake kurung buka & tutup
// tapi kalau ada 1 param doang, gausah pake kurung gpp
let sayHello2 = (name, greeting) => {
    return `${greeting} ${name}`;
}

let mhs2 = sayHello2("Hamzah", "Selamat bobo");
console.log(mhs2);