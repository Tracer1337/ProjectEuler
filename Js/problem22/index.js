const fs = require("fs")

const alphabet = "abcdefghijklmnopqrstuvwxyz"
const alphabeticValue = str => {
  let sum = 0
  for(let i = 0; i < str.length; i++)
    sum += alphabet.indexOf(str[i].toLowerCase())+1
  return sum
}
const nameScore = (str, list) => alphabeticValue(str) * (list.indexOf(str)+1)

fs.readFile("names.txt", "utf-8", (error, data) => {
  if(error) throw error
  const names = data.replace(/"/g, "").split(",").sort()
  let sum = 0
  names.forEach(name => sum += nameScore(name, names))
  console.log(sum)
})
