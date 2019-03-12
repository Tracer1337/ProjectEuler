function sieveOfAtkin(limit){
   var limitSqrt = Math.sqrt(limit);
   var sieve = [];
   var n;
   sieve[2] = true;
   sieve[3] = true;
   for (var x = 1; x <= limitSqrt; x++) {
       var xx = x*x;
       for (var y = 1; y <= limitSqrt; y++) {
           var yy = y*y;
           if (xx + yy >= limit) {
             break;
           }
           n = (4 * xx) + (yy);
           if (n <= limit && (n % 12 == 1 || n % 12 == 5)) {
               sieve[n] = !sieve[n];
           }
           n = (3 * xx) + (yy);
           if (n <= limit && (n % 12 == 7)) {
               sieve[n] = !sieve[n];
           }
           n = (3 * xx) - (yy);
           if (x > y && n <= limit && (n % 12 == 11)) {
               sieve[n] = !sieve[n];
           }
       }
   }
   for (n = 5; n <= limitSqrt; n++) {
       if (sieve[n]) {
           x = n * n;
           for (i = x; i <= limit; i += x) {
               sieve[i] = false;
           }
       }
   }
   return sieve;
}

const primes = sieveOfAtkin(2*10**6)
let res = 0
for(let n in primes){
  if(primes[n]) res += parseInt(n)
}

console.log(res)
