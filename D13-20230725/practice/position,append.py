# fruits=["apple","banana","orange"]
# #fruits.append("pineapple") #add
# #fruits[0]="dragon"#update
# fruits.insert(1,"dragon")#insert
# print(fruits)

# row1=["apple","banana",]
# row2=["dragon","berry"]
# two_rows=row1+row2
# print (two_rows)
# #print(row1+row2)

# details={"name":"karka",
#         "place":"putheri"}
# #details["phone"]=9992345678
# #details["place"]="ngcl"
# details.update({"email":"shali172@gamil.com","website":"www.rfrf.com"})
# print(details)


# friends_names=[{"name":"renisha","place":"marthandam","hobbies":["music","drawing","gardening"]},
# {"name":"puvana","place":"vellamadam","hobbies":["craft","gardening","drawing"]},
# {"name":"sobith","place":"kaliakavillai","hobbies":["movied","playing","travelling"]},
# {"name":"sam","place":"mondaimarket","hobbies":["cricket","movie","travelling"]},
# {"name":"shake","place":"thirunelveli","hobbies":["cricket","football","travelling"]},
# {"name":"sathya","place":"thirunelveli","hobbies":["kabadi","running","travelling"]},
# {"name":"boopathi","place":"parvathipuram","hobbies":["writting","directing","travelling"]}]
# new_friends_names=[{"name":"sha","place":"colachel","hobbies":["writting","dancing","singing"]}]
# two=friends_names+new_friends_names
# print(two)

# friends_names=[{"name":"renisha","place":"marthandam","hobbies":["music","drawing","gardening"]},
# {"name":"puvana","place":"vellamadam","hobbies":["craft","gardening","drawing"]},
# {"name":"sobith","place":"kaliakavillai","hobbies":["movied","playing","travelling"]},
# {"name":"sam","place":"mondaimarket","hobbies":["cricket","movie","travelling"]},
# {"name":"shake","place":"thirunelveli","hobbies":["cricket","football","travelling"]},
# {"name":"sathya","place":"thirunelveli","hobbies":["kabadi","running","travelling"]},
# {"name":"boopathi","place":"parvathipuram","hobbies":["writting","directing","travelling"]}]
# for i in friends_names:
#     i.update({"phone":9994049863})
# print(friends_names)

# friends_names.append({"name":"sha","place":"colachel","hobbies":["writting","dancing","singing"]})
# print(friends_names)


# for friends in friends_names:
#     friends["hobbies"].append("coding")
# print(friends_names)


# friends_names=[{"name":"renisha","place":"marthandam","hobbies":["music","drawing","gardening"]},
# {"name":"puvana","place":"vellamadam","hobbies":["craft","gardening","drawing"]},
# {"name":"sobith","place":"kaliakavillai","hobbies":["movied","playing","travelling"]},
# {"name":"sam","place":"mondaimarket","hobbies":["cricket","movie","travelling"]},
# {"name":"shake","place":"thirunelveli","hobbies":["cricket","football","travelling"]},
# {"name":"sathya","place":"thirunelveli","hobbies":["kabadi","running","travelling"]},
# {"name":"boopathi","place":"parvathipuram","hobbies":["writting","directing","travelling"]}]
# hobbie=input("enter the hobbie")
# name=[]
# for friends in friends_names:
    
#     for hobb in friends["hobbies"]:
        
#         if hobbie==hobb:
#             name.append(friends["name"])
# print(name)


# friends_names=[{"name":"renisha","place":"marthandam","hobbies":["music","drawing","gardening"]},
# {"name":"puvana","place":"vellamadam","hobbies":["craft","gardening","drawing"]},
# {"name":"sobith","place":"kaliakavillai","hobbies":["movied","playing","travelling"]},
# {"name":"sam","place":"mondaimarket","hobbies":["cricket","movie","travelling"]},
# {"name":"shake","place":"thirunelveli","hobbies":["cricket","football","travelling"]},
# {"name":"sathya","place":"thirunelveli","hobbies":["kabadi","running","travelling"]},
# {"name":"boopathi","place":"parvathipuram","hobbies":["writting","directing","travelling"]}]
# hobbie=input("enter the hobbie: ")
# for friends in friends_names:
    
#     for hobbi in friends["hobbies"]:
        
#         if hobbie==hobbi:
#             print (friends["name"])
        



friends_names=[{"name":"renisha","place":"marthandam","hobbies":["music","drawing","gardening"]},
{"name":"puvana","place":"vellamadam","hobbies":["craft","gardening","drawing"]},
{"name":"sobith","place":"kaliakavillai","hobbies":["movied","playing","travelling"]},
{"name":"sam","place":"mondaimarket","hobbies":["cricket","movie","travelling"]},
{"name":"shake","place":"thirunelveli","hobbies":["cricket","football","travelling"]},
{"name":"sathya","place":"thirunelveli","hobbies":["kabadi","running","travelling"]},
{"name":"boopathi","place":"parvathipuram","hobbies":["writting","directing","travelling"]}]

position=0
for friends in friends_names:
    for hob in friends["hobbies"]:
        if hob=="drawing":
            friends[position]="designing"
        position=position+1
print(friends_names)



# Task 2 :  
# for name in friends_names:
#     hobbies=name["hobbies"]
#     position=0
#     for hobby in hobbies:

        
#         if hobby=="drawing":
#           hobbies[position]="designing"
#         position=position+1
        
# print(friends_names)