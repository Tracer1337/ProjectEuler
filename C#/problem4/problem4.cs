using System;

class Problem4{

  static void Main(){

    long highestPalindrome = 0;

    for(int i = 0; i < 1000; i++){
      for(int j = 0; j < 1000; j++){

        long palindrome = j*i;
        if(IsPalindrome(palindrome) && palindrome > highestPalindrome)
          highestPalindrome = palindrome;

      }
    }

    Console.WriteLine(highestPalindrome);

  }

  static bool IsPalindrome(long n){
    char[] chars = n.ToString().ToCharArray();
    Array.Reverse(chars);
    string reversed = new string(chars);
    return n.ToString() == reversed;
  }

}
