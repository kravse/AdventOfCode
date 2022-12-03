const fs = require("fs");
const article = fs
  .readFileSync(`./input.txt`, "utf8")
  .split("\n")
  .filter((val) => !!val);

const letters = "abcdefghijklmnopqrstuvwxyz";
let sum = 0;

const getCharArray = (str) => str.slice(0, str.length).split("");

for (let i = 0; i < article.length; i = i + 3) {
  if (!article[i + 2]) continue;
  const first = getCharArray(article[i]);
  const second = getCharArray(article[i + 1]);
  const third = getCharArray(article[i + 2]);
  for (const letter of [...new Set([].concat(...first, ...second, ...third))]) {
    if (
      first.includes(letter) &&
      second.includes(letter) &&
      third.includes(letter)
    ) {
      let newSum = letters.indexOf(letter.toLowerCase()) + 1;
      sum += letter === letter.toUpperCase() ? newSum + 26 : newSum;
      break;
    }
  }
}
console.log(sum);
