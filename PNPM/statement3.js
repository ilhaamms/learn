let username = "Hamzah"
let pw = "321"

if (username === "ilhaam.ms" && pw === "123") {
    console.log(`Selamat datang ${username}`)
} else if (username === "Hamzah" && pw === "321") {
    console.log(`Selamat datang ${username}`)
} else {
    console.log("Username atau password salah")
}


// Dalam JavaScript, 
// switch memeriksa case secara ketat (harus dari tipe data yang sama) dengan hasil ekspresi.
// pake break dan tidak bisa pake koma, misal : case 1,2,3 :
// kemudian gabisa juga pake operator >, <, dll

let day = 7
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weekday")
        break
    case 6:
    case 7:
        console.log("Weekend")
        break
    default:
        console.log("Not found")
}

console.log("end")