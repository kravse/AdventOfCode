const fs = require('fs');
const file = fs.readFileSync('./input.txt', 'UTF-8');
const inputs = file.split(/\r?\n/);
const fields = [
  "byr",
  "iyr",
  "eyr",
  "hgt",
  "hcl",
  "ecl",
  "pid"
  // "cid"
]

let passport = 0;
let valids = 0;

// this solution is quick and dirty.
for (i in inputs) {
  let current = inputs[i];
  for (j in fields) {
    if (current.includes(fields[j])) passport++
  }
  if(current === "") {
    if (passport >= fields.length) valids++
    passport = 0;
  }
}
console.log(valids)