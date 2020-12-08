const fs = require('fs');
const file = fs.readFileSync('./input.txt', 'UTF-8');
const inputs = file.split(/\r?\n/);

let slopes = [[1, 1],[3, 1],[5, 1],[7, 1],[1, 2]];
let total = 1;

for (let slope in slopes) {
  let coords = slopes[slope];
  let trees = 0;
  for (let i in inputs) {
    let col = i * coords[0];
    let row = i * coords[1]
    if (!inputs[row]) break;
    if (inputs[row][col % inputs[i].length] === '#') trees++;
  }
  total *= trees;
}

console.log(total);