let names = ["Ilham", "Hamzah", "Syifa", 100, true]; // deklarasi array dengan langsung masukin valuenya

names.push("Ardel"); // menambahkan data di array paling terakhir
names.unshift("Imam"); // menambahkan data di array paling depan

console.log(names); // manggil semua data yang ada di array
console.log(names[2]); // manggil data array berdasarkan index

let ages = new Array(); // deklarasi dengan data array yang kosong
ages[0] = 7; // masukan data kedalam array
ages[1] = 8;
ages[2] = 9;

console.log(ages);

let address = []; // atau bisa begini array kosongnya
address[0] = "Bekasi";
console.log(address);

names.pop(); // hapus data array yang paling belakang
names.shift(); // hapus data array yang paling depan

names[0] = "Zahra"

console.log(names);