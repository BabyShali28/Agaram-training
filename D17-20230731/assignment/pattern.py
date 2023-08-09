# for i in range(n):
    
#     print("x"*n)



# n=5
# for i in range(n):
#     for j in range(n):
#         print("x",end='')
#     print('')

     

#

# n=5
# count=0
# for i in range(1,):
    
#     for j in range(n):
        
#         print(count,end='')
#     print('')

#####1 to 25
# n=5
# for i in range(1,(n*n)+1):
#     print(i," ",end='')
#     if i%n==0:
#         print('\n')
    

######reverse
# n=5
# for i in range((n*n),0,-1):
    
    
#     if i%n==0:
#         print('\n')
#     print(i,end=' ')


# n=5
# for i in range(n):
#     for j in range(i+1):
#         print("x",end='')
#     print(' ')


# n=5
# for i in range(1,n+1):
#     for j in range(i):
#         print("x",end='')
#     print(' ')


# n=5
# for i in range(n,0,-1):
#     for j in range(i):
#         print("x",end='')
#     print(' ')

#Answer : 1     

# given  = [1,0,2,3,0,4,0,5,0]
# res = []
# for i in given: 
#     if len(res) < len(given) : 

#         if i == 0 and len(res) < (len(given)-1) :
#                 res+=[i,i]
#         else: 
#             res+=[i]
    
#     else : 
#           break

# print('result', res)





stri= "the quick brown fox jumps over the lazy dog the quick brown fox"
total={}
def frequent(strin):
    
    st=strin.split()
    for a in st:
        
        if a not in strin:
            
            total.update({a:1})
        else:
            total[a]+=1
          
    print(total)

frequent(stri)




