triangle_numbers = [int(1/2*n*(n+1)) for n in range(1, 1000)]
alphabetic_position = lambda letter: ord(letter.upper())-64
word_value = lambda word: sum(map(alphabetic_position, word))

with open("./assets/problem42.txt", "r") as f:
    words = f.read().replace("\"", "").split(",")
    triangle_words = list(filter(lambda w: word_value(w) in triangle_numbers, words))

print(len(triangle_words))
