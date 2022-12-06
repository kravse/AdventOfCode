const fs = require("fs");
const stream = fs
  .readFileSync(`./input.txt`, "utf8")
  .split("")
  .filter((val) => !!val && val !== `\n`);
const pattern = /^(?:([A-Za-z])(?!.*\1))*$/;
let count = 0;
const messageMarker = [];
const messageMarkerLen = 4;

/* part b */
// let messageMarkerLen = 14;

stream.every((val) => {
  count++;
  messageMarker.length > messageMarkerLen - 1 && messageMarker.shift();
  messageMarker.push(val);
  return messageMarker.length < messageMarkerLen
    ? true
    : !pattern.test(messageMarker.join(""));

  /* ...Or we can use sets
   *  return messageMarker.length < messageMarkerLen
   *  ? true
   *  : [...new Set([...messageMarker])].length !== messageMarkerLen;
   */
});

console.log(count);
