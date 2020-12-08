const fs = require('fs');
const file = fs.readFileSync('./input.txt', 'UTF-8');
const inputs = file.split(/\r?\n/);
let cleanInputs = inputs.map(function (current) {
  current = current.split(" ");
  current[3] = current[3].slice(0, 1)
  return current;
});

let wins = 0;
for (i in cleanInputs) {
  let letter = cleanInputs[i][3]
  let i1 = Number(cleanInputs[i][0])
  let i2 = Number(cleanInputs[i][2])
  let str = cleanInputs[i][4];
  if ((str[i1-1] === letter && str[i2-1] !== letter) ||
    (str[i1 - 1] !== letter && str[i2 - 1] === letter)) {
   wins++
  }

}
console.log(wins);


