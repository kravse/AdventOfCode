const fs = require('fs');
const file = fs.readFileSync('./input.txt', 'UTF-8');
const inputs = file.split(/\r?\n/);

let nice = 0;
for (str of inputs) {
  if (/((.{2,})\S*\2)/.test(str) && /(.)\S{1}\1/.test(str)) {
    nice++;
  }
}
console.log(nice)