const fs = require('fs');
const file = fs.readFileSync('./input.txt', 'UTF-8');
const inputs = file.split(/\r?\n/);

function sumExists(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    for (var j= 0; j< arr.length; j++) {
      if (Number(arr[i]) + Number(arr[j]) === Number(val)) return true;
    }
  }
  return false;
}

for (var i = 25; i < inputs.length; i++) {
  if (!sumExists(inputs.slice(i-25, i), inputs[i])) console.log(inputs[i])
}

