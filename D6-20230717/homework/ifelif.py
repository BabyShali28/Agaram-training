amount_of_item=int(input("Enter the amount:"))
if amount_of_item >500 and amount_of_item <=1000:
    print("you have owned a silver token")
elif amount_of_item >1000 and amount_of_item <5000:
    print("you have owned a golden token")
elif amount_of_item ==5000 or amount_of_item >5000:
    print ("you have owned a platinum token")
#elif amount_of_item ==500 or amount_of_item <500:(this or next else line .whatever we need)
    #print ("no token available")
else:
    print ("no token available")
