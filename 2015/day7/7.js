const fs = require('fs');
const file = fs.readFileSync('./input.txt', 'UTF-8');
const inputs = file.split(/\r?\n/);

let commands = inputs
  .map(e => e.split(" -> "))
  .reduce((map, ruleset) => {
    map.set(ruleset[1], ruleset[0])
    return map;
  }, new Map());

const bitwise = {
  AND: (a, b) => a&b&0xFFFF,
  OR: (a, b) => a|b&0xFFFF,
  LSHIFT: (a, b) => a<<b&0xFFFF,
  RSHIFT: (a, b) =>  a>>b&0xFFFF,
  NOT: (a) => ~a&0xFFFF
}
const resolve = (wire) => {
  let lookup = commands.get(wire);
  if (isNaN(wire) === false) return wire
  if (isNaN(lookup) === false) return lookup
  lookup = lookup.split(" ")
  if (lookup.length === 2) {
    commands.set(wire, bitwise[lookup[0]](resolve(lookup[1])))
  } else if (lookup.length === 3) {
    commands.set(wire, bitwise[lookup[1]](resolve(lookup[0]), resolve(lookup[2])))
  }
  return resolve(commands.get(wire))
}

console.log(resolve('a'))