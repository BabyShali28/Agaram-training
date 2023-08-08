#method1
mail_id=input("enter the email id ")
password=input("enter the password")
email_id="shalibaby15@gmail.com"
email_password="Sha2801"
if mail_id != email_id and password == email_password:
    print("wrong email")
elif mail_id == email_id  and password!=email_password:
    print("wrong password")
#elif mail_id !=email_id and password != email_password:
    #print ("you are not authenticated")
elif mail_id == email_id and password == email_password:
    print ("you are logged in sucessfully")
else :
    print ("you are not authenticated")

#method2
mail_id=input("enter the email id ")
password=input("enter the password")
if mail_id != 