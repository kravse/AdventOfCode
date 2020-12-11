const fs = require('fs');
const file = fs.readFileSync('./input.txt', 'UTF-8');
const inputs = file.split(/\r?\n/)

let adapters = inputs.map(e => Number(e))
// let joltJumps = [];
// let joltage = 0;

// let lowest = Math.min.apply(Math, adapters);
// adapters.splice(adapters.indexOf(lowest), 1);
// let counter = 0;
let mySet = new Set();
var myArray = ["cat", "dog", "snake"];

// Just thinking things through here with what a recursive function would look like.
let combos = (array) => {
  for (var i = 0; i < myArray.length; i++) {
    if (!mySet.has(myArray[i])) mySet.add(myArray[i])

    for (var j = 0; j < myArray.length; j++) {
      if (myArray[i] !== myArray[j]) {
        if (!mySet.has(myArray[i] + myArray[j])) mySet.add(myArray[i] + myArray[j])

        for (var k = 0; k < myArray.length; k++) {
          if (myArray[i] !== myArray[j] && myArray[j] !== myArray[k]) {
            if (!mySet.has(myArray[i] + myArray[j] + myArray[k])) mySet.add(myArray[i] + myArray[j] + myArray[k])
          }
        }
      }
    }
  }
}
combos(myArray)
console.log(mySet);
// console.log(numCount(1) * numCount(3))
