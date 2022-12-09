const fs = require("fs");
let stream = fs
  .readFileSync(`./input.txt`, "utf8")
  .split("\n")
  .filter((val) => !!val);
let rows = stream;
let cols = [];

stream.forEach((row) => {
  row.split("").forEach((val, j) => {
    !cols[j] ? cols.push(val) : (cols[j] = cols[j] + val);
  });
});

stream = stream.map((val) => val.split(""));

const getScenicScore = (val, paths) => {
  let score = 1;
  paths.forEach((trees) => {
    if (trees.length > 0) {
      let treeIndex = trees.findIndex((tree) => Number(tree) >= Number(val));
      if (treeIndex === -1) {
        score *= trees.length;
      } else {
        score *= treeIndex + 1;
      }
    }
  });
  return score;
};

const createViewPathsArr = (x, y) => {
  let top = cols[y].slice(0, x);
  let bottom = cols[y].slice(x + 1, cols[y].length);
  let left = rows[x].slice(0, y);
  let right = rows[x].slice(y + 1, rows[x].length);
  return [
    top.split("").reverse(),
    bottom.split(""),
    left.split("").reverse(),
    right.split(""),
  ];
};

const scores = [];
for (let x = 0; x < stream.length; x++) {
  for (let y = 0; y < stream[x].length; y++) {
    scores.push(getScenicScore(stream[x][y], createViewPathsArr(x, y)));
  }
}
console.log(Math.max(...scores));
