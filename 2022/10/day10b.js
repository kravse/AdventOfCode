const fs = require("fs");
let stream = fs
  .readFileSync(`./input.txt`, "utf8")
  .split("\n")
  .filter((val) => !!val);

let queue = [0];
let x = 1;

stream.forEach((val, i) => {
  if (val !== "noop") {
    const [_, weight] = val.split(" ");
    queue.push(0);
    queue.push(Number(weight));
  } else {
    queue.push(0);
  }
});

queue.forEach((val, i) => {
  x += Number(val);
  let mod = i % 40;
  if (mod - 1 == x || mod + 1 == x || mod == x) {
    process.stdout.write("#");
  } else {
    process.stdout.write(" ");
  }
  if ((i + 1) % 40 == 0 && i > 0) {
    console.log("\n");
  }
});

/*
 *   ###  #  #  ##  ####  ##    ## ###  ###
 *   #  # # #  #  #    # #  #    # #  # #  #
 *   #  # ##   #  #   #  #  #    # ###  #  #
 *   ###  # #  ####  #   ####    # #  # ###
 *   # #  # #  #  # #    #  # #  # #  # # #
 *   #  # #  # #  # #### #  #  ##  ###  #  #
 */
