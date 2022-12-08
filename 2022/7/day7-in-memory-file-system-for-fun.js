const fs = require("fs");
const stream = fs.readFileSync(`./input.txt`, "utf8").split("\n");

let dir = {
  "/": {},
};

let currentDir = dir["/"];
let dirChain = ["/"];

stream.forEach((val) => {
  if (val.startsWith("$")) {
    if (val === "$ cd /") {
      currentDir = dir["/"];
      dirChain = ["/"];
    } else if (val === "$ cd ..") {
      if (dirChain.length === 1) {
        currentDir = dir["/"];
        dirChain = ["/"];
      } else {
        dirChain.pop();
        dirChain.forEach((dirInChain) => {
          dirInChain === "/"
            ? (currentDir = dir["/"])
            : (currentDir = currentDir[dirInChain]);
          dirChain.push(dirInChain);
        });
      }
    } else if (val.startsWith("$ cd")) {
      let newDir = val.replace("$ cd ", "");
      currentDir = currentDir[newDir];
      dirChain.push(newDir);
    }
  } else {
    let [sizeOrDir, name] = val.split(" ");
    if (sizeOrDir === "dir") {
      currentDir[name] = {};
    } else {
      currentDir[name] = sizeOrDir;
    }
  }
});
