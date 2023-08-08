maths=int(input("enter the mark"))
phys=int(input("enter the mark"))
chem=int(input("enter the mark"))
if maths>=65 and phys>=55 and chem>=50:
    if (maths+phys+chem)>=190 or (maths+phys)>=140:
        print("eligible candidate")
    else:
        print("not eligible")
else:
    print("not eligible")
