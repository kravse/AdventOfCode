const fs = require('fs');
const file = fs.readFileSync('./input.txt', 'UTF-8');
const inputs = file.split(/\r?\n/);

let rules = new Map()
let bags = [];

for (i of inputs) {
  let current = i.replace(/ |\.|bags|bag/g, "").split("contain")
  rules.set(current[0], current[1].replace(/[0-9]/g, '').split(","))
}

(findParents = (val) => {
  rules.forEach((value, key) => {
    if (value.includes(val) && !bags.includes(key)) {
      bags.push(key);
      findParents(key);
    }
  })
})("shinygold")

console.log(bags.length)