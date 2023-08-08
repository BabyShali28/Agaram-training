'''list_numbers=[3,5,48,7,87,56]
even=[]
odd=[]
for num in list_numbers:
    if num%2==0:
        even.append(num)
    else:
        odd.append(num)
print(even)
print(odd)'''

'''details=[{"name":"shal","age":21},
         {"name":"abi","age":24,},
         {"name":"babi","age":39}]
for nam in details:
    print(nam["name"])'''

'''monthly_gold_rate=[{"month":"january","gold_rate":2500},
                   {"month":"february","gold_rate":1900},
                   {"month":"march","gold_rate":3500},
                   {"month":"april","gold_rate":1867},
                   {"month":"may","gold_rate":2500}]
min_value=monthly_gold_rate[0]["gold_rate"]
max_value=0
for rate in monthly_gold_rate:
    if rate["gold_rate"]<=min_value:
        min_value=rate["gold_rate"] 
        month=rate["month"]
    if rate["gold_rate"]>=max_value:
        max_value=rate["gold_rate"]
        month1=rate["month"]
print("minumun gold rate in",month,min_value)
print("maximun gold rate in",month,max_value)'''
                  



'''monthly_gold_rate=[{"month":"january","gold_rate":2500},
                   {"month":"february","gold_rate":1900},
                   {"month":"march","gold_rate":3500},
                   {"month":"april","gold_rate":1867},
                   {"month":"may","gold_rate":2800}]
max_value=0
for rate in monthly_gold_rate:
    if rate["gold_rate"]>0:
        max_value=rate["gold_rate"]
print (max_value)'''


'''monthly_gold_rate=[{"month":"january",
                    "gold_rate":2500,
                    "jewll_list":[{"name":"chain",
                                    "make_crg":12},
                                    {"name":"ring",
                                    "make_crg":11}]},       
                   {"month":"february",
                   "gold_rate":1900,
                   "jewll_list":[{"name":"chain",
                                  "make_crg":12}
                                 {"name":"ring",
                                  "make_crg":11}]},
                   {"month":"march",
                   "gold_rate":3500,
                   "jewll_list":[{"name":"chain",
                                  "make_crg":12}
                                 {"name":"ring",
                                  "make_crg":11}]},
                   {"month":"april",
                   "gold_rate":1867,
                   "jewll_list":[{"name":"chain",
                                 "make_crg":12},
                                 {"name":"ring",
                                  "make_crg":11}]},
                   {"month":"may",
                   "gold_rate":2500,
                   "jewll-list":[{"name":"chaini",
                                  "make_crg":11}
                                  {"name":"ring",
                                  "make_crg":11}]}]
min_value=monthly_gold_rate[0]["gold_rate"]
max_value=0
for rate in monthly_gold_rate:
    if rate["gold_rate"]<=min_value:
        min_value=rate["gold_rate"] 
        month=rate["month"]
    if rate["gold_rate"]>=max_value:
        max_value=rate["gold_rate"]
        month1=rate["month"]
print("minumun gold rate in",month,min_value)
print("maximun gold rate in",month,max_value)'''
                  
        





'''user_details = [{"name" : "ajay",
                "marks" : [80,90,70,40,60]},
                {"name" : "manimala",
                "marks" : [100,80,40,90,70]},
                {"name" : "abarna",
                "marks" : [72,65,68,89,86]}]
for student in user_details:
    print(student["marks"])
    total = 0
    #max_value=0
    for x in student["marks"]: 
        total = total + x
    print(total)   
        if total >= max_value:
        max_value=total
        print(max_value)'''


monthly_gold_rate=[{"month":"jan","gold_rate":2500},
                    {"month":"february","gold_rate":1900},
                    {"month":"march","gold_rate":3500},
                    {"month":"april","gold_rate":1867},
                    {"month":"may","gold_rate":2500}]
max_value=0
min_value=(monthly_gold_rate[0]["gold_rate"])
for rate in monthly_gold_rate:
    #max_value=rate["gold_rate"]
    if rate["gold_rate"]>=max_value:
        max_value=rate["gold_rate"]
        month=rate["month"]
    if rate["gold_rate"]<=min_value:
        min_value=rate["gold_rate"]
        month1=rate["month"]
print("maximun is:",month,max_value)  
print("minimum is:",month,min_value)        




'''for item in  monthly_gold_rate:
    
    print( "Gold rate is " + str(item["rate"]))
    jewls_list = item["jewls_list"]
    
    for j in jewls_list:
                        # 2000 * 13 / 100
        cal_mak_charge = item["rate"] * j['making_charge'] / 100
        final_charge = item["rate"] + cal_mak_charge
        print( j['name'] + " rate is "+ str(final_charge))'''







