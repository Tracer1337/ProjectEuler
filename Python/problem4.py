import itertools

def isPalindrome(str):
    return str == str[::-1]

largestPalindrome = 0
for i, j in itertools.product(range(100, 999), range(100, 999)):
    product = i*j
    if(isPalindrome(str(product)) and product > largestPalindrome):
        largestPalindrome = product

print(largestPalindrome)
