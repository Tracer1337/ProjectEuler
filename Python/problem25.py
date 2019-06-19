a, b, i = 1, 1, 2
while(len(str(b)) < 10000):
    a, b, i = b, a+b, i+1

print(i)
