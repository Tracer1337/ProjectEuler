const reduce = (numerator,denominator) => {
  let gcd = (a,b) => b ? gcd(b, a%b) : a
  gcd = gcd(numerator,denominator)
  return [numerator/gcd, denominator/gcd]
}

const sharingDigit = (n1, n2) => {
  for(let char of n1.toString())
    if(n2.toString().indexOf(char) != -1)
      return parseInt(char)
  return false
}

const isCuriousFraction = (n1, n2) => {
  let digit = sharingDigit(n1, n2)
  if(digit){
    let newN1 = parseInt(n1.toString().replace(digit, ""))
    let newN2 = parseInt(n2.toString().replace(digit, ""))
    return n1/n2 == newN1/newN2
  }
  return false
}

const result = []
for(let i = 10; i <= 99; i++){
  for(let j = 10; j <= 99; j++){
    if(i % 10 != 0 && j % 10 != 0 && i != j && result.every(n => !n.includes(i) && !n.includes(j))){
      if(isCuriousFraction(i,j)){
        result.push([i,j])
      }
    }
  }
}

const product = [1, 1]
for(let fraction of result){
  product[0] *= fraction[0]
  product[1] *= fraction[1]
}
console.log(reduce(...product))
