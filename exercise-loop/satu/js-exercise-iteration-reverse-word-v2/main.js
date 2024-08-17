function reverseUnique(word) {

  let reverseWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    if (word[i] === reverseWord[reverseWord.length - 1]) {
      continue;
    } else {
      reverseWord += word[i];
    }
  }

  return reverseWord;
}

console.log(reverseUnique('book')); //gnitaerg
console.log(reverseUnique('learning')); //gninrael
console.log(reverseUnique('book')); // kob
console.log(reverseUnique('RuangGuru')); //uruGnauR
console.log(reverseUnique('I am reading a book how to hunt a deer')); // red a tnuh ot woh kob a gnidaer ma I

module.exports = reverseUnique;