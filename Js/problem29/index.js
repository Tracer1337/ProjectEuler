const powers = []
for(let i = 2n; i <= 100n; i++){
  for(let j = 2n; j <= 100n; j++){
    powers.push(i**j)
  }
}
const result = []
powers.forEach(n => !result.includes(n) ? result.push(n) : null)
console.log(result, result.length)
