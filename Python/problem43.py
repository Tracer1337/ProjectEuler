from itertools import permutations
divisors = (2,3,5,7,11,13,17)
valid_numbers = []
for i in permutations([i for i in range(10)]):
    number = int("".join(map(str, i)))
    substrings = [str(number)[i:i+3] for i in range(1, 8)]
    valid = True
    for j in range(len(substrings)):
        if not int(substrings[j]) % divisors[j] == 0:
            valid = False
    if valid: valid_numbers.append(number)

print(valid_numbers, sum(valid_numbers))
