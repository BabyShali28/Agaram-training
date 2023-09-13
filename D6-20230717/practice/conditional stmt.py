gender="male"
if gender=="male":
    print ("BLUE")               
else:
    print("pink")

gender="male"
if gender=="male":
    print("blue")
elif gender=="female":
    print("pink")
elif gender=="transgender":
    print("lavender")
else:
    print("invalid type")


gender=input("enter gender:")
if gender=="male":
    print("blue")
elif gender=="female":
    print("pink")
elif gender=="transgender":
    print("lavender")
else:
    print("invalid type")

total_mark=int(input("enter the mark:"))
if total_mark>92:
    print("you are eligible for mbbs")
elif total_mark>85 and total_mark<=92:
    print("pds")
elif total_mark>75 or total_mark<=85:
    print("agriculture")
else :
    print("go to engineering")




























