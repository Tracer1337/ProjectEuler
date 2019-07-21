def per(n):
    steps = 0
    result = n
    while len(str(result)) > 1:
        digits = map(int, list(str(result)))
        result = 1
        for n in digits:
            result *= n
        steps += 1
    return steps

query, largestLength, count, i = 10, 0, 0, 1
while count < query or query < 0:
    i += 1
    temp = per(i)
    if temp > largestLength:
        count += 1
        largestLength = temp
        print(i, largestLength)
