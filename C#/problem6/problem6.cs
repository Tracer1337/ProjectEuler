using System;

class Problem6{

  static void Main(){

    long a = SumOfSquares(100);
    long b = SquareOfSum(100);
    long diff = b - a;

    Console.WriteLine(diff);

  }

  static long SumOfSquares(int n){
    long sum = 0;
    for(int i = 0; i <= n; i++)
      sum += i * i;
    return sum;
  }

  static long SquareOfSum(int n){
    long sum = 0;
    for(int i = 0; i <= n; i++)
      sum += i;
    return sum * sum;
  }

}
