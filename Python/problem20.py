import math
sum = 0
for digit in str(math.factorial(100)):
    sum += int(digit)
print(sum)
