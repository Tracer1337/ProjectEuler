const num = 600851475143;
let largestFact = 0;
let factors = [];

for (let i = 2; i * i < num; i++) {
    if (num % i == 0) {
        factors[0] = i;
        factors[1] = num / i;

        for (let k = 0; k < 2; k++) {
            let isPrime = true;
            for (let j = 2; j * j < factors[k]; j++) {
                if (factors[k] % j == 0) {
                    isPrime = false;
                    break;
                 }
             }
             if (isPrime && factors[k] > largestFact) {
                largestFact = factors[k];
            }
        }
    }
}

console.log(largestFact)
