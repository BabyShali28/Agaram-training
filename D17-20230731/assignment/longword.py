# words=input("enter the word:")

# def large(wor):

#     longest=0
#     count=0
#     for word in wor:
    
#         if word!=" ":
            
#             count=count+1
        
#         elif word==" ":
#             if count>longest:
#                 longest=count
#                 count=0
#             elif count<longest:
#                 longest=longest
#                 count=0
                
#     print(longest)
# large(words)


words=input("enter the word:")

def large(wor):
    a=wor.split()
    longest=""
    count=0
    for word in a:
    
        if len(word)>len(longest):
            longest=word
        elif len(word)<len(longest):
            longest=longest
        
        
                
    print(len(longest))
large(words)





sentence=input("Enter the sentence: ")
    
def find_longest_word(words):
    words=words.split()
    longest_word=""
    for word in words:
        if len(word)>len(longest_word):
            longest_word=word
    return longest_word

final=find_longest_word(sentence)
print(final,"is the longest word")