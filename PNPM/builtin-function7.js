let mhs = "Ilham Muhammad Sidiq";

console.log(mhs.length); // banyaknya karakter, termasuk spasi
console.log(mhs.toLowerCase()); // jadi huruf kecil semua
console.log(mhs.toUpperCase()); // jadi huruf besar semua
console.log(mhs.split(" ")); // dipecah menjadi array berdasarkan spasi
console.log(mhs.substring(0, 14)); // ngambil kata dari index 0 - 14


let number = 123456;

console.log(typeof number);
console.log(typeof String(number)); // konversi number ke string
// konversi ke number dengan cara Number(variabel)

// hasilnya false karena
// bahwa NaN tidak pernah dianggap sama dengan nilai apa pun
console.log(NaN == "314F");