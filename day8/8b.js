const fs = require('fs');
const file = fs.readFileSync('./input.txt', 'UTF-8');
const inputs = file.split(/\r?\n/);

let acc = 0;

let nopORjmp = new Map();

(function checkNopesJumps() {
  let counter = 0;
  let once = false;
  acc = 0;

  for (var i = 0; i < inputs.length; i++) {
    if (counter === inputs.length) break;
    if (!inputs[i]) return;
    counter++;
    let instruction = inputs[i].split(" ");
    switch (instruction[0]) {
      case "acc":
        acc += Number(instruction[1])
        break;
      case "jmp":
        if (!nopORjmp.has(i) && !once) {
          once = true;
          nopORjmp.set(i, instruction[0])
        } else {
          i += Number(instruction[1] - 1)
        }
        break;
      case "nop":
        if (!nopORjmp.has(i) && !once) {
          once = true;
          nopORjmp.set(i, instruction[0])
          i += Number(instruction[1] - 1)
        }
        break;
    }
  }
  checkNopesJumps();
})()

console.log(acc)
