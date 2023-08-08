userDtails = [{
    "name" : "saravana",
    "e_mail" : "saravana@gmail.com",
    "password" : "saravan@123",
},
{
    "name" : "benish",
    "e_mail" : "benish@gmail.com",
    "password" : "benish@123",
},
{
    "name" : "kabeesh",
    "e_mail" : "kabeesh@gmail.com",
    "password" : "kabeesh@123",
},
{
    "name" : "naathan",
    "e_mail" : "naathan@gmail.com",
    "password" : "naathan@123",
}]
choice=input("enter your choice:")
    
        
    
def login_details(detail):
    mail_id=input("enter the mail id:")
    password=input("enter the password:")
    for details in detail:
        if details["e_mail"]==mail_id and details["password"]==password:
            print(details["name"])
        #else:
    #print("invalid data")


def register(detail):
    user_name=input("enter your name:")
    mail_id=input("enter the mail id:")
    password=input("enter the password:")
    password_check=input("enter the password again:")
    if password==password_check:
        detail.append({"name":user_name,"e_mail":mail_id,"password":password})
        print(detail)

if choice=="login":
    login_details(userDtails)
elif choice=="register":
    register(userDtails)

















