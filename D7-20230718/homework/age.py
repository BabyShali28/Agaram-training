name=input("enter your name:")
age=int(input("enter your age:"))
gender=input("enter your gender:")
#gender1="male"
#gender2="female"
if age>=60:
    if gender=="male":
        print ("hi mr." +name, "you are a senior citizen") 
    else:
        print ("hi miss." +name, "you are a senior citizen")
elif age>=18:
    if gender=="male":
        print("hi mr." +name, "you are an adult")
    else:
        print ("hi miss." +name, "you are an adult")
elif age<18:
    if gender=="male":
        print("hi mr." +name, "you are a teenager")
    else:
        print ("hi miss." +name, "you are a teenager")