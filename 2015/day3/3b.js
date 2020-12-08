const fs = require('fs');
const file = fs.readFileSync('./input.txt', 'UTF-8');
const inputs = file.replace(/\s/g, "").split("");

let houses = new Set();
let robotOrSanta = [[0, 0], [0, 0]];

for (var i = 0; i < inputs.length; i++) {
  let alternate = i % 2
  switch(inputs[i]) {
    case ">":
      robotOrSanta[alternate][0]++
      break;
    case "<":
      robotOrSanta[alternate][0]--
      break;
    case "^":
      robotOrSanta[alternate][1]++
      break;
    case "v":
      robotOrSanta[alternate][1]--
      break;
  }
  houses.add(robotOrSanta[alternate] + "")
}

console.log(houses.size)