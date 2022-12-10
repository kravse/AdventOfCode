const { log } = require("console");
const fs = require("fs");
let stream = fs
  .readFileSync(`./input.txt`, "utf8")
  .split("\n")
  .filter((val) => !!val)
  .map((val) => val.split(" "));

let h = { x: 0, y: 0 };
let t = { x: 0, y: 0 };

let positions = new Set();
const getKeyFromObj = (obj) => Object.values(obj).join(",");
positions.add(getKeyFromObj(t));

let moves = [];

stream.forEach(([direction, dist], i) => {
  moves.push(...new Array(Number(dist)).fill(direction));
});
// do moves now.
moves.forEach((val, i) => {
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
  if (Math.abs(t.x - h.x) > 1 || Math.abs(t.y - h.y) > 1) {
    let yGreater = h.y > t.y;
    let xGreater = h.x > t.x;
    let xEqual = h.x == t.x;
    let yEqual = h.y == t.y;
    let bothDifferent = !xEqual && !yEqual;
    let moved = false;
    let map = new Array(10).fill().map(() => new Array(10).fill("*"));
    map[t.x][t.y] = "T";
    map[h.x][h.y] = "H";
    map.forEach((val) => console.log(val.join("")));
    console.log("------------------------------------");

    if (xEqual || bothDifferent) {
      if (yGreater) {
        t.y += 1;
      } else {
        t.y -= 1;
      }
      moved = true;
    }
    if (yEqual || bothDifferent) {
      if (xGreater) {
        t.x += 1;
      } else {
        t.x -= 1;
      }
      moved = true;
    }
    if (moved) {
      positions.add(getKeyFromObj(t));
    }
    map = new Array(10).fill().map(() => new Array(10).fill("*"));
    map[t.x][t.y] = "T";
    map[h.x][h.y] = "H";
    map.forEach((val) => console.log(val.join("")));

    console.log("------------------------------------");
  }
});
console.log(positions.size);
