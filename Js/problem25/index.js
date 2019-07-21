const lastDigits = [1n,1n]
let index = 2
while(lastDigits[1].toString().length < 1000){
  const newTerm = lastDigits[0] + lastDigits[1]
  const length = newTerm.toString().length
  lastDigits.shift()
  lastDigits.push(newTerm)
  index++
}
console.log(index)
