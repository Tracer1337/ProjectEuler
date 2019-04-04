numbers = [1,2]
sum = 0
while numbers[len(numbers)-1] <= 4*10**6:
    n = numbers[len(numbers)-1]+numbers[len(numbers)-2]
    numbers.append(n)
    if(n % 2 == 0):
        sum += n

print(sum)
