const fs = require('fs');
const file = fs.readFileSync('./input.txt', 'UTF-8');
const inputs = file.split(/\r?\n/);

let trees = 0;
let sled = 0;
for (i in inputs) {
  sled = i * 3;
  if (inputs[i][sled % inputs[i].length] === '#') trees++
}

console.log(trees)