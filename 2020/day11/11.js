const fs = require("fs");
let stream = fs
  .readFileSync(`./input.txt`, "utf8")
  .split("\n")
  .filter((val) => !!val);
stream = stream.map((row) => row.split(""));

// hack to create a deep copy;
let newStream = JSON.parse(JSON.stringify(stream));
const getStringFromStream = (stream) => {
  let string = "";
  stream.forEach((val) => {
    val.forEach((otherVal) => {
      string += otherVal;
    });
  });
  return string;
};
while (2 !== 5) {
  stream.forEach((row, i) => {
    row.forEach((col, j) => {
      newStream[i][j] = col;
      let surroundings = `
      ${stream?.[i - 1]?.[j - 1]}${stream?.[i - 1]?.[j]}${
        stream?.[i - 1]?.[j + 1]
      }
      ${stream?.[i]?.[j - 1]}${stream?.[i]?.[j + 1]}
      ${stream?.[i + 1]?.[j - 1]}${stream?.[i + 1]?.[j]}${
        stream?.[i + 1]?.[j + 1]
      }
    `;
      if (col === "L" && !surroundings.includes("#")) {
        newStream[i][j] = "#";
      } else if (col === "#" && surroundings.match(/#/g, [])?.length >= 4) {
        newStream[i][j] = "L";
      }
    });
  });
  stream = JSON.parse(JSON.stringify(newStream));
  console.log(getStringFromStream(stream).match(/#/g, []).length);
}
