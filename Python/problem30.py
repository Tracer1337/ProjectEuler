result = 0
for i in range(10**3, 10**6):
    if(i == sum([int(j)**5 for j in str(i)])):
        result += i

print(result)
