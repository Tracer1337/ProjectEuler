import string

def alphabeticValue(str):
    cs = list(str)
    sum = 0
    for c in cs:
        sum += ord(c.upper()) - 64
    return sum

names = open("assets/problem22.txt", "r").read().replace("\"", "").split(",")
names.sort()
sum = 0

for i in range(len(names)):
    namescore = alphabeticValue(names[i]) * (i+1)
    sum += namescore

print(sum)
