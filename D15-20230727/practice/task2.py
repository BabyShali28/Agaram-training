# List1=[10,30,50,70,90,110]
# List2=[15,35,55,65,95,100]
# for each in range (len(List1)):
#     #print (each)
#     if List1[each]>List2[each]:
#         print (List1[each],"is greater")
#     else:
#         print(List2[each],"is greater")



   
palindrome=input("enter the palindrome:")
for i in palindrome:
    reverse=""
reverse=i+reverse
if reverse==palindrome:
    print (palindrome,"is string")
else :
    print(palindrome,"is not a string")