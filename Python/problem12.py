import math

def NumberOfDivisors(num):
    nod = 0
    sqrt = math.ceil(math.sqrt(num))

    for i in range(1, sqrt+1):
        if num % i == 0:
            nod += 2

    if sqrt * sqrt == num:
        nod -= 1

    return nod

number = 0
i = 1

while NumberOfDivisors(number) < 500:
    number += i
    i += 1

print(number)
