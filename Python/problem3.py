def primefactorization(n):
    primfac = []
    d = 2
    while d*d <= n:
        while (n % d) == 0:
            primfac.append(d)
            n //= d
        d += 1
    if n > 1:
       primfac.append(n)
    return primfac

primes = primefactorization(600851475143)
result = primes[len(primes)-1]
print(result)
