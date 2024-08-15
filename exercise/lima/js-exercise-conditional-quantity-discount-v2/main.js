function quantityDiscount(quantity, price) {

  let totalPrice = quantity * price;
  let diskon = 0;

  if (quantity < 5) {
    return totalPrice + (totalPrice * 0.11)
  } else if (quantity >= 10) {
    diskon = totalPrice - (totalPrice * 0.20)
    return diskon + (diskon * 0.11);
    // return (totalPrice * 0.15) + (totalPrice * 1.11)
  } else if (quantity >= 5) {
    diskon = totalPrice - (totalPrice * 0.15)
    return diskon + (diskon * 0.11);
  }

  // let totalPrice = quantity * price;
  // let diskon = 0;

  // if (quantity >= 10) {
  //   diskon = totalPrice - (totalPrice * 0.20); // Diskon 20% untuk quantity >= 10
  // } else if (quantity >= 5) {
  //   diskon = totalPrice - (totalPrice * 0.15); // Diskon 15% untuk quantity >= 5 dan < 10
  // } else {
  //   return totalPrice + (totalPrice * 0.11); // Tanpa diskon, hanya menambahkan pajak 11%
  // }

  // return diskon + (diskon * 0.11); // Harga setelah diskon ditambah pajak 11%

}

// console.log(quantityDiscount(1, 100));
// console.log(quantityDiscount(5, 100));
// console.log(quantityDiscount(5, 100));
// console.log(quantityDiscount(10, 100));
console.log(quantityDiscount(15, 3));
// console.log(quantityDiscount(3, 10000));
// console.log(quantityDiscount(12, 10000));

module.exports = quantityDiscount;
