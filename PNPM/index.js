console.log('Hello, world hahawak!');
// JANGAN LUPA TAMBAHKAN SEMICOLON
// kalau debug block sama localnya harus kebuka

// devDependencies dengan nodemon -> pnpm install --save-dev nodemon(nama package)
// supaya ketika ubah file, tidak perlu restart server
// devDependencies adalah cara mendaftarkan package-package yang kita ingin gunakan hanya di proses development saja.

// kemudian ada pnpm install, yaitu untuk menginstall package yang ada di package.json
// jadi gausah di push ke git yang folder node_modules & file pnpm-lock.yaml, cukup push package.json aja
// kemudian nanti yang pull tinggal pnpm install aja, maka otomatis akan menginstall package yang ada di package.json

/* 
    tipe data di javascript ada
    1. Dalam JavaScript, ada 6 tipe data primitif: string, number, boolean, null, undefined, symbol
    variabel bisa const(konstan), var, dan let

    Perlu diperhatikan bahwa variable const memang tidak bisa di assign ulang, tetapi value dan property dalam suatu array dan object bisa diubah
*/

var number1 = 10
const number2 = 12.5
console.log(number1)

number1 = 100

console.log(number1)

const dataString = "bisa pake petik 2 atau petik 1 atau backtick"

const benar = true
const salah = false

// cek tipe data

console.log(typeof 1)
console.log(typeof "1")
console.log(typeof true)
console.log(typeof null)
console.log(typeof tester)

let globalVar = "This is a global variable";

function fun() {
    let localVar = "This is a local variable";

    console.log(globalVar);
    console.log(localVar);
}
fun();

// string interpolation hanya bisa dengan backtick saja
let user = "Ilham Muhammad Sidiq"

console.log(`Welcome ${user}`)