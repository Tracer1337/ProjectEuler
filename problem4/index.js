function isPalindrom(num){
  let arr = num.toString().split("")
  for(let i = 0; i < Math.floor(arr.length/2); i++){
    if(arr[i] != arr[arr.length - 1 - i]){
      return false
    }
  }
  return true
}

let max = 0
for(let i = 0; i < 1000; i++){
  for(let j = 0; j < 1000; j++){
    const product = i * j
    if(isPalindrom(product) && product > max) max = product
  }
}

console.log(max)
