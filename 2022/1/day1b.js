const fs = require("fs");

let article = fs.readFileSync(`./input.txt`, "utf8").split("\n");

let currentCount = 0;
let counts = [];
article.forEach((val) => {
  if (val === "") {
    counts.push(currentCount);
    currentCount = 0;
  } else {
    currentCount += Number(val);
  }
});
counts = counts.sort((a, b) => b - a);

console.log(counts.slice(0, 3).reduce((partialSum, a) => partialSum + a, 0));
