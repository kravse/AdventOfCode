const fs = require('fs');
const file = fs.readFileSync('./input.txt', 'UTF-8');
const inputs = file.split(/\r?\n/);
let cleanInputs = inputs.map(function(current) {
  current = current.split(" ");
  current[3] = current[3].slice(0, 1)
  return current;
});

let wins = 0;
for (i in cleanInputs) {
  let letter = cleanInputs[i][3]
  let occurance = (cleanInputs[i][4].match(new RegExp(letter, 'g')) || []).length
  if (Number(cleanInputs[i][0]) <= occurance && Number(cleanInputs[i][2]) >= occurance) wins++

}
console.log(wins);
