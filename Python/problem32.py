from itertools import permutations
result = []
for i in permutations([1,2,3,4,5,6,7,8,9]):
    number = "".join(map(str,i))
    length = len(number)
    for a in range(1, length - 1):
        for b in range(a + 1, length):
            f1 = int(number[:a])
            f2 = int(number[a:b])
            p = int(number[b:])
            if f1 * f2 == p and p not in result:
                result.append(p)
print(sum(result))
