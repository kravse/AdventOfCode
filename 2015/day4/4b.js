const CryptoJS = require('crypto-js')
const key = "yzbqklnj";

let leading = ''
let i = 282749

while (leading != '000000') {
  leading = CryptoJS.MD5(key + i).toString().substring(0, 6)
  console.log(i, CryptoJS.MD5(key + i).toString())
  i++
}

console.log(i-1)

