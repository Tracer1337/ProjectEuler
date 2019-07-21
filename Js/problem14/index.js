const even = n => n / 2
const odd = n => n * 3 + 1

function chain(n){
  let i = 1
  while(n !== 1){
    if(n % 2 == 0)
      n = even(n)
    else
      n = odd(n)
    i++
  }
  return i
}

let max = 0, maxI = 0
for(let i = 1; i < 10**6; i++){
  const chainlength = chain(i)
  if(chainlength > max) {
    max = chainlength
    maxI = i
  }
}

console.log(max, maxI)
