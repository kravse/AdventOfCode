const inputs = require('./input.js');

for (i in inputs) {
  for (j in inputs) {
    for (k in inputs) {
      if (inputs[i] + inputs[j] + inputs[k] === 2020) {
        console.log(inputs[i] * inputs[j] * inputs[k]);
      }
    }
  }
}