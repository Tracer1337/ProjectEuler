const sumOfProperDivisors = n => {
  let sum = 0
  for(let i = 1; i < n; i++){
    if(n % i == 0)
      sum += i
  }
  return sum
}
const amicableNumber = n1 => {
  const n2 = sumOfProperDivisors(n1)
  return n1 !== n2 && sumOfProperDivisors(n2) == n1 ? n2 : false
}

const result = []
for(let i = 0; i <= 10000; i++){
  if(!result.includes(i)){
    const n2 = amicableNumber(i)
    if(n2)
      result.push(i, n2)
  }
}

console.log(result.reduce((a, b) => a + b))
