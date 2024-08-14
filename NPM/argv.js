const argv = process.argv; // ini hasilnya array

// inputan dari user, caranya pake node namaFile.js 10 20
const panjang = argv[2];
const lebar = argv[3];

const luas = panjang * lebar;

console.log(luas);