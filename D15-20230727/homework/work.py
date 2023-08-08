# items_list = [
#     {'name': 'Apple', 'category': 'Fruits'},
#     {'name': 'Carrot', 'category': 'Vegetables'},
#     {'name': 'Banana', 'category': 'Fruits'},
#     {'name': 'Broccoli', 'category': 'Vegetables'}
#     ]
# result={}
# def fru_veg(item):
#     fruits=[]
#     Vegetables=[]
#     for items in item:
#         if items["category"]=="Fruits":
#             fruits.append(items["name"])
#         else:
#             Vegetables.append(items["name"])            
#     result.update({"fruits":fruits,"Vegetables":Vegetables})
#     print (result)
# fru_veg(items_list)





# number=int(input("enter the number"))
# result=[]
# y=range(1,number+1)
# for z in y :
#     if z/4!=0:

#         result.append(z)

# print (result)
         
# number=int(input("enter the number"))

# for x in range(1,number+1):
#     result=[]
#     def prime(inp):
#         #result=[]
#         if inp%2==0:
#             result.append(inp)
#     prime(x)
# print(result)


# number=int(input("enter the number"))
# result=[]
# for x in range(2,number+1):

#     for y in range(2,x):
#         if x==2:
#             result.append(x)
#         elif x>2:
#             if x%y==0:
#                 break
#             else :
#                 result.append(x)
#                 break
#         else:
#             break
# print(result)
sum=0
number=int(input("enter the number:"))
if number>9:
    for num in number:
        sum+=num
print(sum)



