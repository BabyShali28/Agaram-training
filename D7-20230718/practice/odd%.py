#assign new variable
'''number=int(input("enter the number:"))
reminder=number%2
if reminder==0:
    print ("even number")
else:
    print ("odd number")'''


#without assign new variable
'''number=int(input("enter the number:"))
if number%2==0:
    print ("even")
else:
    print ("odd")'''

#assign new variable
'''number1=int(input("enter the number :"))
number2=int(input("enter the number :"))
num=number1%number2
if num==0:
    print ("yes")
else:
    print ("no")'''

#without assign new variable
'''number1=int(input("enter the number :"))
number2=int(input("enter the number :"))
if number1%number2==0:
    print ("yes")
else:
    print ("no")'''

year=int(input("enter the year:"))
if (year%400==0 and year%100==0)or(year%4==0 and year%100!=0):
    print ("leap year")
else:
    print (" not leap year")


year=int(input("enter the year:"))
if (year%100==0):
    if (year%400==0):
        print("leap year")
elif (year%100!=0):
    if (year%4==0):
        print("leap year")

