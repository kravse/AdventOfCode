const fs = require("fs");
const article = fs
  .readFileSync(`./input.txt`, "utf8")
  .split("\n")
  .filter((val) => !!val);

let count = 0;
article.forEach((val) => {
  let halves = val.split(",");
  const left = halves[0].split("-");
  const right = halves[1].split("-");

  if (
    Number(left[0]) >= Number(right[0]) ||
    Number(left[1]) <= Number(right[1]) ||
    Number(right[0]) >= Number(left[0]) ||
    Number(right[1]) <= Number(left[1])
  ) {
    count++;
  }
});
console.log(count);
