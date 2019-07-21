const fs = require("fs")

module.exports = function getGrid(){
  return new Promise(resolve => {
    fs.readFile("./grid.txt", "utf-8", (err, data) => {
      if(err) throw new Error(err)
      data = data.replace(/\r?\n|\r/g, " ").split(" ")
      let grid = []
      for(let i = 0; i < 20; i++){
        grid[i] = data.slice(i*20, i*20+20)
      }
      resolve(grid)
    })
  })
}
