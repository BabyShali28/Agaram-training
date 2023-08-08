# def function_name():
#     #print("i am called")
#     
# function_name()


# def names():
#     a="karka"
#     b="academy"
#     print(a+" "+b)
# names()


# def combine_names(a,b):
#     print(a+" "+b)
# combine_names("karka","academy",)
# #combine_names("sha","li")

# def combine_names(a,b,c):
#     print(a+" "+b" "+c)
# combine_names("karka","academy","dfr")

# first_name=input("enter the first name")
# second_name=input("enter the second name")
# def combine_names(first_name,second_name):
#     print(first_name+" "+second_name)
# combine_names(first_name,second_name)



# gender_is=input("enter the gender:")
# def gender_colour(gender):
#     if gender=="male":
#         print("blue")
#     elif gender=="female":
#         print("pink")
#     else:
#         print("invalid")
# gender_colour(gender_is)



# num1=input("enter the first number")
# num2=input("enter the second number")
# def maximum(a,b):
#     if a>b:
#         print(a)
#     else:
#         print(b)
# maximum(num1,num2)


# num1=int(input("enter the first number"))
# num2=int(input("enter the second number"))
# def maximum(a,b):
#     if a>b:
#         print(a)
        
#             if a%2==0:
#             print("even number")
#           
#         else:
#             print("odd number")
#     elif a<b:
#         print(b)
#         if b%2==0:
#             print("even number")  
#         else:
#             print("odd number")
# maximum(num1,num2)    



num1=int(input("enter the first number"))
num2=int(input("enter the second number"))
def even_odd(number):
            if number%2==0:
                print(number,"is even number")
            else:
                print(number,"is odd number")
def maximum(first_num,second_num):
    if first_num>second_num:
        print(first_num)
        even_odd(first_num)
    elif first_num<second_num:
        print(second_num)
        even_odd(second_num)
    elif first_num==second_num:
        print("both are same")
    else:
        print("check the input")
maximum(num1,num2)



    

