numbers = open("assets/problem13.txt", "r").read().strip().split("\n")
sum = 0

for num in numbers:
    sum += int(num)

print(str(sum)[:10])
