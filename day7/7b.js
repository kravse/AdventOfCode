const fs = require('fs');
const file = fs.readFileSync('./input.txt', 'UTF-8');
const inputs = file.split(/\r?\n/);

let rules = new Map()

for (i of inputs) {
  let current = i.replace(/ |\.|bags|bag/g, "").split("contain")
  rules.set(current[0], current[1].split(","))
};

let findChildren = function (bag) {
  let containedBags = rules.get(bag)
  if (containedBags.includes('noother')) {
    return 0;
  }
  let count = 1
  for (var i of containedBags) {
    let nextResult = findChildren(i.slice(1, i.length))
    if (nextResult === 0) {
      count += Number(i.charAt(0))
    } else {
      count += Number(i.charAt(0)) * nextResult
    }
  }
  return count
}

console.log(findChildren("shinygold") -1)

// got a bit of guidance on this one from here: https://github.com/tpatel/advent-of-code-2020/blob/main/day07.js