using System;

class Problem5{

  static void Main(){

    long solution = 0;
    long i = 0;

    while(solution == 0){
      for(int j = 1; j <= 20; j++)
        if(i % j != 0)
          break;
        else if(j == 20)
          solution = i;

      i++;
    }

    Console.WriteLine(solution);

  }

}
