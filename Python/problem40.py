from functools import reduce

fraction = ''
i = 1
while len(fraction) <= 10**6:
	fraction += str(i)
	i += 1

factors = [fraction[10**i-1] for i in range(0, 6)]
product = reduce((lambda x,y: int(x)*int(y)), factors)

print(product)
