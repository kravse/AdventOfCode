const fs = require('fs');
const file = fs.readFileSync('./input.txt', 'UTF-8');
const inputs = file.split(/\r?\n/);

let total = 0;
let entries = new Set();
for (i = 0; i < inputs.length; i++) {
  if (inputs[i].length === 0) {
    total += entries.size;
    entries.clear();
  } else {
    entries = new Set([...entries, ...inputs[i].split("")]);
  }
}
console.log(total)