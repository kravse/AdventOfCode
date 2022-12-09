const fs = require("fs");
let stream = fs
  .readFileSync(`./input.txt`, "utf8")
  .split("\n")
  .filter((val) => !!val);
let rows = stream;
let cols = [];

stream.forEach((row, i) => {
  row.split("").forEach((val, j) => {
    !cols[j] ? cols.push(val) : (cols[j] = cols[j] + val);
  });
});
stream = stream.map((val) => val.split(""));
let seenCount = 0;
const isEdge = (x, y) => {
  return (
    x === 0 || y === 0 || x === stream.length - 1 || y === stream[0].length - 1
  );
};
const canSee = (val, paths) => {
  console.log(paths);
  try {
    paths.forEach((trees) => {
      if (
        trees.split("").filter((tree) => {
          return Number(tree) >= Number(val);
        }).length === 0
      ) {
        throw "";
      }
    });
  } catch {
    return true;
  }
  return false;
};
for (let x = 0; x < stream.length; x++) {
  for (let y = 0; y < stream[x].length; y++) {
    if (isEdge(x, y)) {
      seenCount++;
    } else {
      let paths = [
        cols[y].slice(0, x),
        cols[y].slice(x + 1, cols[y].length),
        rows[x].slice(0, y),
        rows[x].slice(y + 1, rows[x].length),
      ];
      if (canSee(stream[x][y], paths)) {
        seenCount++;
      }
    }
  }
}

console.log(seenCount);
