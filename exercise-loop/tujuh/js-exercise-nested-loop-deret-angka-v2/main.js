function deretanAngkaHinggaN(n) {

  let result = "";

  if (n <= 1) {
    return "Incorrect param";
  }

  for (let i = 1; i < n; i++) {
    let valueN = n - i;

    for (let j = valueN; j >= 1; j--) {
      result += j;
    }
  }

  return result;

}
console.log(deretanAngkaHinggaN(5));

module.exports = deretanAngkaHinggaN;
