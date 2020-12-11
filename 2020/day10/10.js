const fs = require('fs');
const file = fs.readFileSync('./input.txt', 'UTF-8');
const inputs = file.split(/\r?\n/)

let adapters = inputs.map(e => Number(e))
let joltJumps = [3];
let joltage = 0;

const numCount = (num) => joltJumps.filter(x => x === num).length

while (joltJumps.length <= inputs.length) {
  let smallest = Math.min.apply(Math, adapters);
  adapters.splice(adapters.indexOf(smallest), 1);
  joltJumps.push(smallest - joltage);
  joltage = smallest;
}

console.log(numCount(1) * numCount(3))
