const fs = require("fs")
const bigInt = require("big-integer")

fs.readFile("./number.txt", "utf-8", (err, data) => {
  if(err) throw new Error(err)
  let sum = "0"
  data = data
          .replace(/\r?\n|\r/g, " ")
          .trim()
          .split(" ")
          .forEach(e => sum = bigInt(sum).add(e))
  console.log(sum.valueOf().toString().replace(".", "").substr(0, 10))
})
