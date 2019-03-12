function NumberOfDivisors(number) {
    let nod = 0;
    let sqrt = Math.sqrt(number);

    for(let i = 1; i <= sqrt; i++){
        if(number % i == 0){
            nod += 2;
        }
    }

    if (sqrt * sqrt == number) {
        nod--;
    }

    return nod;
}

let number = 0;
let i = 1;

while(NumberOfDivisors(number) < 500){
    number += i;
    i++;
}

console.log(number)
