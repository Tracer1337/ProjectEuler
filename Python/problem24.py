from itertools import permutations

perm = permutations([i for i in range(10)])
result = list(map(lambda x: str(x), perm))[10**6-1]
print(result)
