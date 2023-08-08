def count(wor):
    vowel="aeiouAEIOU"
    sum=0
    for word1 in wor:
        if word1 in vowel:
            sum=sum+1
    return sum


def vowel(words):
    a=words.split()
    max_vow_count=0
    max_vow_word=""
    for word in a:
        vow_count=count(word)
        if vow_count>max_vow_count:
            max_vow_count=vow_count
            max_vow_word=word
    print(max_vow_count)
    print(max_vow_word)
sentence=input("enter the words:")
vowel(sentence)


















