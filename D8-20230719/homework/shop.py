food1=input("enter the first food:")
food2=input("enter the second food:")
user_foods={"milk":1.02,"popcorn":2.5,"bread":2.5}
if food1=="milk" or food1=="popcorn" or food1=="bread":
    if food2=="milk" or food2=="popcorn" or food2=="bread":
        print (user_foods[food1]+user_foods[food2])
    else:
         print("food2 is missing")
elif food2=="milk" or food2=="popcorn" or food2=="bread":
    print ("food1 is missing")
else:
    print("food items is not available")