const fs = require("fs");
const stream = fs.readFileSync(`./input.txt`, "utf8").split("\n");

// let dir = {
//   "/": {},
// };

let folders = new Map();
folders.set("/", 0);
let currentDir = "/";
let dirChain = ["/"];

stream.forEach((val) => {
  if (val.startsWith("$")) {
    if (val === "$ cd /") {
      currentDir = "/";
      dirChain = ["/"];
    } else if (val === "$ cd ..") {
      if (dirChain.length === 1) {
        currentDir = "/";
        dirChain = ["/"];
      } else {
        dirChain.pop();
        currentDir = dirChain[dirChain.length - 1];
      }
    } else if (val.startsWith("$ cd")) {
      let newDir = `${val.replace("$ cd ", "")}/`;
      currentDir = newDir;
      dirChain.push(newDir);
    }
  } else {
    let [sizeOrDir, name] = val.split(" ");
    if (sizeOrDir === "dir") {
      let path = `${dirChain.join("")}${name}/`;
      if (!folders.has(path)) folders.set(path, 0);
    } else {
      dirChain.forEach((_, i) => {
        let path = dirChain.slice(0, i + 1).join("");
        let currentSize = folders.get(path);
        folders.set(path, currentSize + Number(sizeOrDir));
      });
    }
  }
});
let dif = null;
let bestSize = null;
let currentFreeSpace = 70000000 - folders.get("/");
let requiredFreeSpace = 30000000 - currentFreeSpace;
console.log(requiredFreeSpace);
folders.forEach((size, _) => {
  if (size >= requiredFreeSpace) {
    newDif = size - requiredFreeSpace;
    if (newDif < dif || dif === null) {
      console.log(size, newDif);
      dif = newDif;
      bestSize = size;
    }
  }
});

console.log(`${requiredFreeSpace} needed, found ${bestSize} to delete`);
