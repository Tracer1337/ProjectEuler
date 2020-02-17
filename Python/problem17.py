import math

digits = ["d_empty", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
tens = ["t_empty", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
exclusive_tens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
hundred = "hundred"
thousand = "thousand"

sum_of_letters = 0

def getTens(i):
    word = ""
    digit_index = i%10
    tens_index = math.floor(i/10)

    if i < 20:
        word = exclusive_tens[digit_index]

    elif digit_index == 0:
        word = tens[tens_index]

    else:
        word = tens[tens_index] + digits[digit_index]

    return word

def getHundreds(i):
    word = ""
    hundreds = math.floor(i/100)

    if i % 100 == 0:
        word = digits[hundreds] + hundred

    elif i % 100 < 10:
        word = digits[hundreds] + hundred + "and" + digits[i%10]

    else:
        word = digits[hundreds] + hundred + "and" + getTens(i%100)

    return word

def getThousands(i):
    return "onethousand"

def getWord(i):
    word = ""

    if i < 10:
        word = digits[i]

    elif i < 100:
        word = getTens(i)

    elif i < 1000:
        word = getHundreds(i)

    elif i == 1000:
        word = getThousands(i)

    return word

for i in range(1, 1001):
    word = getWord(i)
    sum_of_letters += len(word)

print(sum_of_letters)