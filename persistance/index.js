function per(n){
  let steps = 0, result = n
  while(result.toString().length > 1){
    const digits = result.toString().split("").map(e => parseInt(e))
    result = 1
    digits.forEach(e => result *= e)
    steps++
  }
  return steps
}

let query = process.argv[2], largestLength = 0, count = 0, i = 1
while(count < query || query < 0){
  const temp = per(++i)
  if(temp > largestLength){
    count++
    largestLength = temp
    console.log(i, largestLength)
  }
}
