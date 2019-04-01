const palindrome = str => str.toLowerCase() == str.toLowerCase().split("").reverse().join("")

let sum = 0
for(let i = 1; i < 10**6; i++)
  if(palindrome(i.toString()) && palindrome(i.toString(2)))
    sum+=i
console.log(sum)
