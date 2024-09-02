function buyThemAll(books, budget) {

  let buyBook = "";
  let totalBuku = "";
  // let buyBookLength = 0;
  let priceBook = "";
  let index = 0;

  // let cekTypeBookLength = typeof buyBookLength;
  // let cekTypeIndex = typeof index;

  for (let i = 0; i < books.length; i++) {
    buyBook += books[i];
    totalBuku += books[i];

    if (books[i] === ":") {
      index = i;
      totalBuku += ", ";
    }

    // console.log(buyBook.length);
    // buyBookLength = buyBook.length;

    if (books[i] === ",") {
      priceBook = "";
      for (let j = index + 1; j < i; j++) {
        priceBook += books[j];
      }

      if (budget >= Number(priceBook)) {
        budget -= Number(priceBook);
      }
    }
  }

  priceBook = "";
  for (let i = index + 1; i <= buyBook.length - 1; i++) {
    priceBook += books[i];
  }

  if (budget >= Number(priceBook)) {
    budget -= Number(priceBook);
  }

  console.log(buyBook);
}

// console.log(buyThemAll('The Alchemist:55000,The Hobit:20000,The Power of Habit:10000', 100000)); //Afista membeli 3 buku yaitu The Alchemist, The Hobit, The Power of Habit. Total belanja 85000, sisa uang Afista adalah 15000.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 300000)); // Afista membeli 2 buku yaitu Javascript itu asik, Belajar HTML5. Total belanja 221200, sisa uang Afista adalah 78800.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 20000)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 20000.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 0)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 0.

console.log(
  buyThemAll(
    "The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000",
    200000
  )
); // Afista membeli 3 buku yaitu The Alchemist, The Hobbit, The Power of Habit. Total belanja 125000, sisa uang Afista adalah 25000.

module.exports = buyThemAll;
