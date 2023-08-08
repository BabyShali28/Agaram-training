items_list = [
    {'name': 'Apple', 'category': 'Fruits'},
    {'name': 'Carrot', 'category': 'Vegetables'},
    {'name': 'Banana', 'category': 'Fruits'},
    {'name': 'Broccoli', 'category': 'Vegetables'}
    ]

result={}

def two_list(a):
    
    fruits=[]
    vegetables=[]
    for items in a:
        if items["category"]=="Fruits":
        #two_list(items)
            fruits.append(items["name"])
        
        elif items["category"]=="Vegetables":
            vegetables.append(items["name"])
#print(fruits)
#print(vegetables)
    result.update({"fruits":fruits,"vegetables":vegetables})
two_list(items_list)
print(result)



items_list = [
    {'name': 'Apple', 'category': 'Fruits'},
    {'name': 'Carrot', 'category': 'Vegetables'},
    {'name': 'Banana', 'category': 'Fruits'},
    {'name': 'Broccoli', 'category': 'Vegetables'}
    ]

 a={}

 for item in items_list
    if item["category"] in a:
        a["category"].append(item["name"])
    else:













    
























