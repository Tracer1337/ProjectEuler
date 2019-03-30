const power = 5

function digitPowers(n){
  let sum = 0
  n.toString().split("").forEach(number => sum+=number**power)
  return sum
}

const result = []
for(let i = 2; i < 10**(power+1); i++){
  if(digitPowers(i) == i)
    result.push(i)
}
let sum = 0
result.forEach(n => sum+=n)

console.log(sum)
