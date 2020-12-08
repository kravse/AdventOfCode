const inputs = require('./input.js');

for (i in inputs) {
  for (j in inputs) {
    if (inputs[i] + inputs[j] === 2020) {
      console.log(inputs[i] * inputs[j]);
    }
  }
}