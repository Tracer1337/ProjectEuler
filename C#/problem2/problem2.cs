using System;

class Problem2{

  static void Main(){
    int a = 1;
    int b = 2;
    int sum = 0;
    while(b < 4000000){
      if(b % 2 == 0)
        sum += b;
      int temp = b;
      b = a + b;
      a = temp;
    }
    Console.WriteLine(sum);
  }

}
