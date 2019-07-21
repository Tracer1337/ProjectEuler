using System;
using System.Collections.Generic;

class Problem3{

  static void Main(){
    List<long> factors = prime_factors(600851475143);

    string output = "";
    foreach(long n in factors)
      output += n + ", ";
    Console.Write(output.Remove(output.Length-2));
  }

  static List<long> prime_factors(long n){
    List<long> factors = new List<long>();
    long p = 2;

    while(n >= p*p){
      if(n % p == 0){
        factors.Add(p);
        n /= p;
      }else{
        p++;
      }
    }
    factors.Add(n);

    return factors;
  }

}
