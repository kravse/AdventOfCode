const fs = require("fs");
const article = fs.readFileSync(`./input.txt`, "utf8").split("\n");
const letters = "abcdefghijklmnopqrstuvwxyz";

let sum = 0;

const getCharArray = (str) => [...new Set(str.split(""))];

article.forEach((val) => {
  const left = getCharArray(val.slice(0, val.length / 2));
  const right = getCharArray(val.slice(val.length / 2, val.length));
  left.forEach((letter) => {
    if (right.includes(letter)) {
      let newSum = letters.indexOf(letter.toLowerCase()) + 1;
      sum += letter === letter.toUpperCase() ? newSum + 26 : newSum;
    }
  });
});
console.log(sum);
