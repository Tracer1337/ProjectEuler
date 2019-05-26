def even(n):
    return n/2

def odd(n):
    return n*3+1

def chain(n):
    i = 1

    while n != 1:
        if n % 2 == 0:
            n = even(n)
        else:
            n = odd(n)
        i += 1

    return i

max = 0
maxI = 0

for i in range(1, 10**6):
    chainLength = chain(i)
    if chainLength > max:
        max = chainLength
        maxI = i

print(max, maxI)
