using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

class Problem7{

  static void Main(){

    List<int> primes = Primes(10001);
    Console.WriteLine(primes[primes.Count-1]);

  }

  static List<int> Primes(int n){
    List<int> primes = new List<int>();
    int i = 2;
    while(primes.Count < n){
      bool isPrime = true;
      for(int j = 2; j <= i/2; j++){
        if(i % j == 0){
          isPrime = false;
          break;
        }
      }
      if(isPrime)
        primes.Add(i);
      i++;
    }
    return primes;
  }

}
