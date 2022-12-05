const fs = require("fs");
const article = fs
  .readFileSync(`./input.txt`, "utf8")
  .split("\n")
  .filter((val) => !!val);
const indexOfFirstMove = article.indexOf(
  article.find((val) => val.startsWith("move"))
);
let stack = article.slice(0, indexOfFirstMove);
let instructions = article.slice(indexOfFirstMove, article.length);
// lmao
let stacks = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
};

stack.forEach((val) => {
  let split = val.match(/.{1,4}/g);
  split.forEach((val, i) => {
    val = val.trim().replace("[", "").replace("]", "");
    if (val.trim() && isNaN(val)) {
      stacks[i + 1].push(val);
    }
  });
});
for (key in stacks) {
  stacks[key] = stacks[key].reverse();
}
const parseInstructions = (str) => {
  return {
    move: Number(str.slice(4, str.indexOf("from")).trim()),
    from: Number(str.slice(str.indexOf("from ") + 5, str.indexOf("to")).trim()),
    to: Number(str.slice(str.indexOf("to ") + 3, str.length).trim()),
  };
};
instructions.forEach((instruction) => {
  let i = parseInstructions(instruction);
  let moveVals = [];
  for (let x = 0; x < i.move; x++) {
    if (stacks[i.from].length > 0) {
      moveVals.push(stacks[i.from].pop());
    }
  }
  stacks[i.to] = stacks[i.to].concat(moveVals.reverse());
});
let result = "";
for (key in stacks) {
  result = `${result}${stacks[key].pop()}`;
}
console.log(result);
