/*
  I struggled a lot with this problem, overcomplicating it in so many ways.
  I ended up browsing github for help, and came accross a ridiculously elegant solution
  at https://github.com/valtism/advent-of-code-2020/blob/master/src/day10.js.

  I learned from it, and used it to come up with this solution. Shoutout to @valtism.
*/

const fs = require('fs');
const file = fs.readFileSync('./input.txt', 'UTF-8');
const inputs = file.split(/\r?\n/)

const adapters = [...inputs.map(e => Number(e))].sort((a, b) => a - b)

const comboCount = () => {
  let combos = {0: 1}
  for (var i = 0; i < adapters.length; i++) {
    let one = combos[adapters[i]-1] || 0;
    let two = combos[adapters[i]-2] || 0;
    let three = combos[adapters[i]-3] || 0;
    combos[adapters[i]] = one + two + three
  }
  return combos[Math.max.apply(Math, adapters)]
};

console.log(comboCount());

