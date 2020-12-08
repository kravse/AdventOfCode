const fs = require('fs');
const file = fs.readFileSync('./input.txt', 'UTF-8');
const inputs = file.split(/\r?\n/);

let state = new State();
let loopState = new LoopState();
let swapped = new Map();

function State() {
  return {
    pos: 0,
    acc: 0
  }
}

function LoopState() {
  return {
    visited: new Set(),
    once: false
  }
}

function acc(val) {
  state.acc += Number(val)
}

function jmp(val) {
  state.pos += Number(val)
}

function swap(val) {
  let success = !swapped.has(state.pos) && !loopState.once
  if (success) {
    loopState.once = true;
    swapped.set(state.pos, val)
  }
  return success
}

while (true) {
  if (!inputs[state.pos]) break;
  if (loopState.visited.has(state.pos)) {
    state = new State();
    loopState = new LoopState();
  }
  loopState.visited.add(state.pos);
  let instruction = inputs[state.pos].split(" ");
  switch (instruction[0]) {
    case "acc":
      acc(instruction[1])
      jmp(1)
      break;
    case "jmp":
      swap(instruction[0]) ? jmp(1) : jmp(instruction[1])
      break;
    case "nop":
      swap(instruction[0]) ? jmp(instruction[1]) : jmp(1)
      break;
  }
}

console.info(state)
