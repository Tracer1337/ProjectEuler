sum = 0
squares = 0
for i in range(1, 101):
    sum += i
    squares += i*i
sum = sum*sum

print(sum - squares)
