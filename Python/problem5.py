import sys
import time

start = time.time()
found = False
n = 20
i = n
while not found:
    for j in range(1, n+1):
        if(i % j != 0):
            break
        elif j == n:
            found = True
            print(i)
            print("Solution took "+str(time.time()-start)+"s")
    i+=n
