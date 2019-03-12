const {num} = require("./num.json")
const chunklength = 13
const chunks = []

for(let i = 0; i < num.length - chunklength; i++){
  chunks.push(num.substr(i, chunklength))
}

let max = 0
for(let series of chunks){
  let res = 1
  for(let n of series){
    n = parseInt(n)
    res *= n
  }
  if(res > max) max = res
}

console.log(max)
