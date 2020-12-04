const fs = require('fs');
const file = fs.readFileSync('./input.txt', 'UTF-8');
const inputs = file.split(/\r?\n/);

let Main = (() => {
  let IDs = [];
  let currentID = [];

  const init = () => {
    cleanup();
    let valids = getValidList(IDs);
    console.log(valids.length)
  };
  const numberInRange = (num, min, max) => {
    return Number(num) >= min && Number(num) <= max
  }

  const validHeight = (val) => {
    if (val.endsWith('cm')) {
      return numberInRange(val.slice(0, -2), 150, 193)
    } else if (val.endsWith('in')) {
      return numberInRange(val.slice(0, -2), 59, 76)
    }
    return false;
  }
  const validEyes = (val) => {
    let eyes = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
    return eyes.includes(val);
  }
  const validColor = (val) => {
    return /^#[0-9A-F]{6}$/i.test(val);
  }
  const validPID = (val) => {
    return val.length === 9 && !isNaN(val)
  }

  const getValidList = (IDList) => {
    return IDList.filter((item) => {
      if (!item.byr || !numberInRange(item.byr, 1920, 2002)) return false
      if (!item.iyr || !numberInRange(item.iyr, 2010, 2020)) return false
      if (!item.eyr || !numberInRange(item.eyr, 2020, 2030)) return false
      if (!item.hgt || !validHeight(item.hgt)) return false
      if (!item.hcl || !validColor(item.hcl)) return false
      if (!item.ecl || !validEyes(item.ecl)) return false
      if (!item.pid || !validPID(item.pid)) return false
      return true;
    })
  }

  const cleanup = () => {
    for (i in inputs) {
      let currentLine = inputs[i];
      if (currentLine === "") {
        IDs.push(currentID);
        currentID = [];
      } else {
        let lineArr = currentLine.split(" ");
        for (j in lineArr) {
          currentID.push(lineArr[j]);
        }
      }
    }

    IDs = IDs.map((val) => {
      let newObj = {}
      for (i in val) {
        let item = val[i].split(":");
        newObj[item[0]] = item[1];
      }
      return newObj;
    })
  }

  return {
    init: init
  }
})()

Main.init();
