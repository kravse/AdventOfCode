const fs = require('fs');
const file = fs.readFileSync('./input.txt', 'UTF-8');
const inputs = file.split(/\r?\n/);

let acc = 0;
let visited = new Set();
for (var i = 0; i < inputs.length; i++) {
  let instruction = inputs[i].split(" ");
  if (visited.has(i))  break;
  visited.add(i);
  switch (instruction[0]) {
    case "acc":
      acc += Number(instruction[1])
      break;
    case "jmp":
      i += Number(instruction[1]-1)
      break;
    case "nop":
      break;
  }
}

console.log(acc);