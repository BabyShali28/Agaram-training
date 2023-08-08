mixed_list=[1,2.0,"hai","@",5,6,"&",8,9]
count=0
for mix in mixed_list:
    if type (mix)==int:      
        count+=1
    else:
        pass
print("number in a mixed list:",count) 