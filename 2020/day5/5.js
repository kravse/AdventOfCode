const fs = require('fs');
const file = fs.readFileSync('./input.txt', 'UTF-8');
const inputs = file.split(/\r?\n/);

const slicer = (rowsOrCols, sliceDirection) => {
  const len = rowsOrCols.length
  if (["F", "L"].includes(sliceDirection)) {
    return rowsOrCols.slice(0, len / 2)
  } else if (["B", "R"].includes(sliceDirection)) {
    return rowsOrCols.slice(len / 2, len)
  }
}
let seats = inputs.map((seat) => {
  let rows = [...Array(128).keys()]
  let cols = [...Array(8).keys()]
  for (i in seat) {
    if (i < 7) {
      rows = slicer(rows, seat[i])
    } else {
      cols = slicer(cols, seat[i])
    }
  }
  return (rows[0] * 8) + cols[0]
}).sort((a, b) => b - a);

console.log(seats[0])