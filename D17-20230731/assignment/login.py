users_details=[{"name":"shali",
                "email":"shalibaby15@gmail.com",
                "password":"sha123",
                "hobbies":["dancing","reading books","travel"],
                "friends_list":["renisha","nancy","aseena"]
                },
                {"name":"renisha",
                "email":"reni12@gmail.com",
                "password":"renu",
                "hobbies":["gardening","listening music","singing"],
                "friends_list":["renisha","nancy","aseena"]
                },
                {
                "name":"c",
                "email":"c@g.cm",
                "password":"cc",
                "hobbies":["gardening","listening music","singing"],
                "friends_list":["renisha","nancy","aseena"]
                }]
# mail_id=input("enter the mail id:")
# password1=input("enter the password")
# def check_details(detail):
#     for det in detail:
#         name1=det["name"]
#         mail1=det["email"]
#         hobbie=""
#         for hobb in det["hobbies"]:
#             hobbie1=hobbie+hobb
#             friends=""
#             for fri in det["friends_list"]:
#                 friends1=friends+fri
#     print(name1,"/",mail1,"your hobbies are:",hobbie1,"your friends are :",friends1)
    



# for details in users_details:
#     if details["email"]==mail_id and details["password"]==password1:
#         users_details.append({"logged_in":"true"})
#         check_details(users_details)
#     else:
#         users_details.append({"logged_in":"false"})
               
#using one function
mail_id=input("enter the mail id:")
password1=input("enter the password")
def check_details(detail): 
    
    name1=detail["name"]
    mail1=detail["email"]
    hobbie=""
    for hobb in detail["hobbies"]:
        hobbie=hobbie+" "+hobb
        friends=""
    for fri in detail["friends_list"]:
        friends=friends+" "+fri
    print(name1,"/",mail1, "\nyour hobbies are:",hobbie , " \nyour friends are :",friends)
    


position=0
for details in users_details:
    if details["email"]==mail_id and details["password"]==password1:

        details[position]=({"logged_in":"true"})
        position=position+1
        check_details(details)
        print("sdf",users_details)
    else:
        details[position]=({"logged_in":"false"})
        position=position+1

        
#print(users_details)             