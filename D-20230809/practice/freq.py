Answer : 1     

given  = [1,0,2,3,0,4,0,5,0]
res = []
for i in given: 
    if len(res) < len(given) : 

        if i == 0 and len(res) < (len(given)-1) :
                res=res+[i,i]
        else: 
            res=res+[i]
    
    else : 
          break

print('result', res)