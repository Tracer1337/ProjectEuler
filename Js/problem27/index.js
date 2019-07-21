const isPrime = num => {
  for(let i = 2; i <= num**1/2; i++)
        if(num % i === 0) return false;
    return num > 1;
}

const numberOfPrimes = (a,b) => {
  let i = 0
  while(isPrime(i*i+a*i+b))
    i++
  return i
}

let highestA = 0, highestB = 0, highestNumberOfPrimes = 0
for(let i = -1000; i < 1000; i++){
  for(let j = -1000; j < 1000; j++){
    let n = numberOfPrimes(i, j)
    if(n > highestNumberOfPrimes){
      highestNumberOfPrimes = n
      highestA = i
      highestB = j
    }
  }
}

console.log(highestA * highestB)
