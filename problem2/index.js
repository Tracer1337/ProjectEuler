let numbers = [1, 2]
let res = 2
let i = numbers.length
while(true){
  const sum = numbers[i - 2] + numbers[i - 1]
  if(sum < 4*10**6){
    if(sum % 2 == 0) res += sum
    numbers.push(numbers[i - 2] + numbers[i - 1])
    i++
  }else break
}
console.log(res)
