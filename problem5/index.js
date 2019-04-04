let i = 1, start = new Date()
while(true){
  for(let j = 1; j <= 20; j++){
    if(i % j != 0) break
    else if(j == 20) {
      console.log(i)
      const end = new Date() - start
      console.log("Solution took "+end+"ms")
      return
    }
  }
  i++
}
