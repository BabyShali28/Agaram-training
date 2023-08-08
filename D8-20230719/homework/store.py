food1=input("enter the first food:")
food2=input("enter the second food:")
food_items=[{"name":"milk","rate":9.2},
            {"name":"popcorn","rate":20.5}
            {"name":"bread","rate":27.7}]
#value=(food_items[])
if food1==(food_items[0]["name"]) or food1==(food_items[1]["name"]):
    if food2==(food_items[0]["name"]) or food2==(food_items[1]["name"]):
        print (food_items[0]["rate"] + food_items[1]["rate"])
    else:
        print("food item is not available")
else:
    print("food item is not available")

'''if food2!=food_items:
        print (food_items[])
    else:
        priin()'''