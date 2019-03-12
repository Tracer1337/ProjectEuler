const sumOfSquares = n => { for(var i = 1, res = 0; i <= n; i++) res += i * i; return res }
const squaresOfSum = n => { for(var i = 1, res = 0; i <= n; i++) res += i; return res**2 }

const n = 100
let solution = squaresOfSum(n) - sumOfSquares(n)
console.log(solution)
