const fs = require('fs');
const file = fs.readFileSync('./input.txt', 'UTF-8');
const inputs = file.split(/\r?\n/);

let total = 0;
let entries = 0;
let section = new Set();

for (i = 0; i < inputs.length; i++) {
  if (inputs[i] == "") {
    total += section.size;
    section.clear();
    entries = 0;
  } else {
    entries++;
    let input = new Set(inputs[i].split(""));
    section = entries === 1 ? input : new Set([...input].filter(x => section.has(x)));
  }
}
console.log(total)