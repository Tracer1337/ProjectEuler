let i = 1
while(true){
  for(let j = 1; j <= 20; j++){
    if(i % j != 0) break
    else if(j == 20) {
      console.log(i)
      return
    }
  }
  i++
}
