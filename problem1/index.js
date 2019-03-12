const to = process.argv[2] ? process.argv[2] : 1000
let res = 0
for(let i = 0; i < to; i++){
  if(i % 3 == 0 || i % 5 == 0) res += i
}
console.log(res)
