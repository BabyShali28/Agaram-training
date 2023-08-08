'''names=["shal","abi","babi"]
for nam in names:
    print (nam)'''

'''fruits=["apple","banana","mango"]
for items in fruits:
    print(items)'''

'''numbers=[3,6,5,1,7,8]
for num in numbers:
    value=num%2
    if value==0:
        print (num)
    elif value!=0:
        print(num)'''
    
numbers=[2,3,15,10,87]
for num in numbers:
    if num%3==0 and num%5==0:
        print("fizzbuzz",num)
    elif num%3==0:
        print("fizz",num)
    elif num%5==0:
        print("buzz",num)
