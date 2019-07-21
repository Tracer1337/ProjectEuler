const getGrid = require("./grid")

getGrid().then(grid => {
  let max = 0
  for(let y = 0; y < 20; y++){
    for(let x = 0; x < 20; x++){
      if(grid[y][x+3]) {
        var productRight = grid[y][x] * grid[y][x+1] * grid[y][x+2] * grid[y][x+3]
      }
      if(grid[y][x-3]) {
        var productLeft = grid[y][x] * grid[y][x-1] * grid[y][x-2] * grid[y][x-3]
      }

      if(grid[y+3]) {
        var productDown = grid[y][x] * grid[y+1][x] * grid[y+2][x] * grid[y+3][x]
      }
      if(grid[y-3]) {
        var productUp = grid[y][x] * grid[y-1][x] * grid[y-2][x] * grid[y-3][x]
      }

      if(grid[y+3] && grid[y][x+3]) {
        var productBottomRight = grid[y][x] * grid[y+1][x+1] * grid[y+2][x+2] * grid[y+3][x+3]
      }
      if(grid[y-3] && grid[y][x+3]) {
        var productTopLeft = grid[y][x] * grid[y-1][x+1] * grid[y-2][x+2] * grid[y-3][x+3]
      }

      if(productRight > max) max = productRight
      if(productLeft > max) max = productLeft

      if(productDown > max) max = productDown
      if(productUp > max) max = productUp

      if(productBottomRight > max) max = productBottomRight
      if(productTopLeft > max) max = productTopLeft
    }
  }
  console.log(max)
})
