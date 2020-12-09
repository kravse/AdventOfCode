const fs = require('fs');
const file = fs.readFileSync('./input.txt', 'UTF-8');
const inputs = file.split(/\r?\n/);

const magicVal = 85848519;

function searchDown(index) {
  let vals = []
  sum = 0;

  while (index > -1 && sum < magicVal) {
    let currentNum = Number(inputs[index])
    vals.push(currentNum)

    let result = vals.reduce((acc, current) => {
      if (acc.lowest > current) acc.lowest = current
      if (acc.highest < current) acc.highest = current
      acc.sum += current
      return acc
    }, { lowest: magicVal, highest: 0, sum: 0 })

    sum = result.sum
    if (result.sum === magicVal) {
      return result.lowest + result.highest
    }
    index--;
  }
  return ""
}

(function scan() {
  for (var i = inputs.length - 1; i > -1; i--) {
    if (inputs[i] < magicVal) {
      let result = searchDown(i);
      if (result) {
        console.log(result)
        return;
      }
    }
  }
})()
