const rotate = array => {
  let result = []
  result.push(Array.from(array))
  for(let i = 1; i < array.length; i++){
    array.unshift(array[array.length-1])
    array.pop()
    result.push(Array.from(array))
  }
  return result
}

const isPrime = num => {
  for(let i = 2; i <= num**1/2; i++)
        if(num % i === 0) return false;
    return num > 1;
}

const isCircularPrime = num => rotate(num.toString().split("")).every(a => isPrime(parseInt(a.join(""))))

let result = 0
for(let i = 2; i < 10**6; i++)
  if(isCircularPrime(i))
    result++

console.log(result)
