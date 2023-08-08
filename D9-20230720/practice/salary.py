salary=int(input("enter the salary:"))
if salary<=10000:
    hra=salary*0.20
    da=salary*0.05
    print("total salary is",salary+hra+da)
elif salary>10000 and salary<=20000:
    hra=salary*0.25
    da=salary*0.07
    print("total salary is",salary+hra+da)
elif salary>20000:
    hra=salary*0.30
    da=salary*0.08
    print("total salary is",salary+hra+da)