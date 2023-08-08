'''age=int(input("enter the age:"))
if age<3:
    print ("free")
elif age>=3 and age<=12:
    print ("pay 10")
elif age>=65:
    print ("pay 12")
else:
    print ("pay 15")'''


'''age=int(input("enter the age:"))
if age<3:
    a="free"
elif age>=3 and age<=12:
    a="pay 10"
elif age>=65:
    a="pay 12"
else:
    a="pay 15"
print(a)'''

'''day=int(input("enter the day number:"))
if day==1:
    print("today is sunday")
elif day==2:
    print("today is monday")
elif day==3:
    print("today is tuesday")
elif day==4:
    print("today is wednesday")
elif day==5:
    print("today is thursday")
elif day==6:
    print("today is friday")
else:
    print("today is saturday")'''

#biggest among three numbers
'''num1=int(input("enter the number:"))
num2=int(input("enter the number:"))
num3=int(input("enter the number:"))
if num1>num2:
    if num1>num3:
        print ("biggest is",num1)
    else:
        print("biggest is",num3)
elif num2>num3:
    print ("biggest is",num2)    
else:
    print("biggest is",num3)'''


 #biggest among three numbers (if same umber)
'''num1=int(input("enter the number:"))
num2=int(input("enter the number:"))
num3=int(input("enter the number:"))
if num1>=num2:
    if num1>=num3:
        print("biggest num is",num1)
    else:
        print("biggest num is",num3)
elif num2>=num3:
    print ("biggest num is",num2)    
else:
    print("biggest num is",num3)'''

#biggest using logic operators
num1=int(input("enter the number:"))
num2=int(input("enter the number:"))
num3=int(input("enter the number:"))
if num1>=num2 and num1>=num3:
    print("biggest num is",num1)
    else:
        print("biggest num is",num3) 
elif num2>=num3:
    print("biggest num is",num2)
else:
    print("biggest num is",num3)





