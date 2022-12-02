const fs = require("fs");
let article = fs.readFileSync(`./input.txt`, "utf8").split("\n");

let losses = ["AZ", "BX", "CY"];
let ties = ["AX", "BY", "CZ"];
let wins = ["AY", "BZ", "CX"];
let score = 0;
let part2Score = 0;

const getScore = (opp, me) => {
  let currentScore = me === "X" ? 1 : me === "Y" ? 2 : 3;
  if (ties.includes(`${opp}${me}`)) {
    currentScore += 3;
  } else if (wins.includes(`${opp}${me}`)) {
    currentScore += 6;
  }
  return currentScore;
};

const choose = (opp, outcome) => {
  let arr = outcome === "X" ? losses : outcome === "Y" ? ties : wins;
  return arr[["A", "B", "C"].indexOf(opp)].slice(1, 2);
};

article.forEach((val) => {
  if (!!val) {
    /* ------ PART 1 ------ */
    let [opp, me] = val.split(" ");
    score += getScore(opp, me);
    /* ------ PART 2 ------ */
    part2Score += getScore(opp, choose(opp, me));
  }
});
console.log(score, part2Score);
