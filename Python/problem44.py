f = lambda x: ((24*x+1)**(1/2)+1)/6
p = lambda x: x*(3*x-1)/2
is_pentagonal = lambda n: f(n).is_integer()
i, result = 1, 0
while result == 0:
    i += 1
    pj = p(i)
    for j in reversed(range(1, i)):
        pk = p(j)
        if is_pentagonal(pj+pk) and is_pentagonal(pj-pk):
            result = abs(pk-pj)
print(result)
