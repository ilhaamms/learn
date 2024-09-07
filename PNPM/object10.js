// Key juga dikenal sebagai properti, biasanya berupa string.
// Jika ada tipe data lain yang digunakan sebagai nama properti selain string,
// itu akan diubah menjadi string.

// property itu adalah key

const employee = {
    names: "Ilham",
    address: "Bekasi Barat",
    age: 23
};

console.log(employee);
console.log(typeof employee);

// akses property dari suatu object dengan dot notation
console.log(employee.address);

// atau bisa pake cara kedua seperti ini bracket Notation, tapi disarankan pake yang dot notation aja
console.log(employee["age"]);

// object destructoring, bisa semuanya disebutin key nya di {sini} atau beberapa doang
const { names, address, age } = employee;

console.log("\nobject destructoring")
console.log(names);
console.log(address);
console.log(age);

// Untuk menambahkan key-value dari sebuah objek kita dapat menggunakan 2 cara
// yaitu menggunakan Dot notation dan Bracket Notation.
const dataMhs = {
    names: "Hamzah",
    age: 7,
    isMarried: false
};

console.log("\nmenggunakan dot notation");
dataMhs.address = "Bandung";
console.log(dataMhs);

console.log("\nmenggunakan bracket notation");
dataMhs["country"] = "Indonesia";
console.log(dataMhs);

// ganti value di object
dataMhs.names = "Hamzah Muhammad Ramadhan"; // dari yang hamzah doang diubah menjadi nama lengkap
console.log(dataMhs);

// kalau ada spasi untuk keynya maka wajib pake tanda kurung siku
dataMhs["birthday date"] = "06 November 2000";
console.log(dataMhs);
console.log(dataMhs["birthday date"]); // kemudian pas aksesnya juga pake bracket notation

// kalau looping object pasti untuk akses datanya pake bracket notation
console.log("\nLOOPING MENGGUNAKAN FOR IN UNTUK OBJECT");
for (let key in dataMhs) {
    console.log(`${key} : ${dataMhs[key]}`);
}

// Object.keys
console.log("\nOBJECT KEYS");
const person = {
    name: "Aditira",
    age: 35,
    location: "Bogor",
};

const keys = Object.keys(person);

console.log(keys); // Result : ["name", "age", "location"]

keys.forEach(key => {
    console.log(`${key}: ${person[key]}`);
});

console.log("\nOBJECT VALUES");
const values = Object.values(person);
values.forEach(value => {
    console.log(`${value}`);
})

// pass by value itu ketika datanya primitif atau bukan object tipe datanya
console.log("\nPASS BY VALUE");
let a = 1;
let b = 2;

function passbyValue(a, b) {
    let tmp = b;
    b = a;
    a = tmp;

    return `yang ada di function ${a} & ${b}`;
}

console.log(`Before Switch ${a} & ${b}`);
console.log(passbyValue(a, b));
console.log(`After Switch ${a} & ${b}`);

// pass by reference itu ketika datanya object atau bukan primitif
// array dan Object merupakan pass by reference property.
console.log("\nPASS BY REFERENCE");
const data1 = {
    a: 1,
    b: 2
};

// const data2 = data1;

function passbyReference(data1) {
    let tmp = data1.b;
    data1.b = data1.a;
    data1.a = tmp;

    return `yang ada di function pass by refernce ${data1.a} & ${data1.b}`;
}

console.log(`Before Switch ${data1.a} & ${data1.b}`);
console.log(passbyReference(data1));
console.log(`After Switch ${data1.a} & ${data1.b}`);