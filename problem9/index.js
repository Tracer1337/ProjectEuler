const isTriplet = (a, b, c) => a*a + b*b == c*c

const query = 1000
loop:
for(let i = 0; i < query; i++){
  for(let j = i+1; j < query; j++){
    for(let k = j+1; k < query; k++){
      if(isTriplet(i,j,k) && i+j+k == 1000){
        console.log(i, j, k, i+j+k, i*j*k)
        break loop
      }
    }
  }
}
