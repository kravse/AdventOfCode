const fs = require("fs");

let article = fs.readFileSync(`./input.txt`, "utf8").split("\n");

let maxCount = 0;
let currentCount = 0;
article.forEach((val) => {
  if (val === "") {
    maxCount = currentCount > maxCount ? currentCount : maxCount;
    currentCount = 0;
  } else {
    currentCount += Number(val);
  }
});

console.log(maxCount);
