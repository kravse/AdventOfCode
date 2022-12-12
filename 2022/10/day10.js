const fs = require("fs");
let stream = fs
  .readFileSync(`./input.txt`, "utf8")
  .split("\n")
  .filter((val) => !!val);

let queue = [0, 0];
let x = 1;
let signal = [];

stream.forEach((val, i) => {
  if (val !== "noop") {
    const [_, weight] = val.split(" ");
    queue.push(0);
    queue.push(Number(weight));
  } else {
    queue.push(0);
  }
});

queue.forEach((val) => {
  x += val;
  signal.push(Number(x));
});
let signals = [20, 60, 100, 140, 180, 220];
let result = 0;
console.log(signal.join(","));
signals.forEach((val) => (result += signal[val] * val));
console.log(result);
