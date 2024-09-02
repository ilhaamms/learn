function sayHello() {
    console.log("hallo gaes selamat datang");
}

sayHello(); // function tanpa parameter

function greet(name, salam) { // function dengan parameter
    console.log(`${salam} ${name}`);
}

greet("Ilham", "Selamat pagi");
greet("Hamzah", "Selamat sore");
greet("Zahra", "Selamat malam");

// default parameter
function sayGreeting(name, greeting = "Hallo") {
    console.log(`${greeting} ${name}`);
}

// jadi optional bisa diisi atay engga
// kalau engga diisi maka akan otomatis keiis default valuenya
sayGreeting("Hamzah");
sayGreeting("Imam", "HI");

// anonymous function / function expression
// bedanya function biasa dengan anonymous function yaitu
// function biasa bebas mau deklarasi function dulu baru panggil
// atau panggil function dulu baru deklarasi functionnya
// tapi kalau anonymous function wajib deklarasi functionnya dulu
// baru setelah itu bisa dipanggil
let sayHellow = function () {
    console.log("hello world!");
};

sayHellow();