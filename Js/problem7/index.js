const nrs = []
let i = 2
while(nrs.length < 10001){
    let isPrime = true;
    for(let j = 2; j < i; j++){
        if(i % j == 0){
            isPrime = false;
        }
    }
    if(isPrime){
        nrs.push(i);
    }
    i++
}

console.log(nrs[nrs.length - 1])
