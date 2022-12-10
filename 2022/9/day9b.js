const { log } = require("console");
const fs = require("fs");
let stream = fs
  .readFileSync(`./input.txt`, "utf8")
  .split("\n")
  .filter((val) => !!val)
  .map((val) => val.split(" "));

let h = { x: 0, y: 0 };
let tails = new Array(9).fill().map(() => {
  return { x: 0, y: 0 };
});

let positions = new Set();
const getKeyFromObj = (obj) => Object.values(obj).join(",");
positions.add(getKeyFromObj(tails[tails.length - 1]));

let moves = [];

stream.forEach(([direction, dist], i) => {
  moves.push(...new Array(Number(dist)).fill(direction));
});
// do moves now.
moves.forEach((val) => {
  switch (val) {
    case "R":
      h.x += 1;
      break;
    case "L":
      h.x -= 1;
      break;
    case "U":
      h.y += 1;
      break;
    case "D":
      h.y -= 1;
      break;
  }
  tails.forEach((tail, i) => {
    if (i == 0) {
      head = h;
    } else {
      head = tails[i - 1];
    }
    let moved = false;

    if (Math.abs(tail.x - head.x) > 1 || Math.abs(tail.y - head.y) > 1) {
      let yGreater = head.y > tail.y;
      let xGreater = head.x > tail.x;
      let xEqual = head.x == tail.x;
      let yEqual = head.y == tail.y;
      let bothDifferent = !xEqual && !yEqual;
      if (xEqual || bothDifferent) {
        if (yGreater) {
          tail.y += 1;
        } else {
          tail.y -= 1;
        }
        moved = true;
      }
      if (yEqual || bothDifferent) {
        if (xGreater) {
          tail.x += 1;
        } else {
          tail.x -= 1;
        }
        moved = true;
      }
    }
    if (moved && i == tails.length - 1) {
      positions.add(getKeyFromObj(tails[tails.length - 1]));
    }
  });
});
console.log(positions.size);
