def sumOfProperDivisors(n):
    sum = 0
    for i in range(1,n):
        if n % i == 0:
            sum += i
    return sum

def amicableNumber(n1):
    n2 = sumOfProperDivisors(n1)
    return n1 != n2 and n2 if sumOfProperDivisors(n2) == n1 else False

result = []
for i in range(10001):
    if i not in result:
        n2 = amicableNumber(i)
        if n2:
            result.append(i)
            result.append(n2)

sum = 0
for n in result:
    sum += n

print(sum)
