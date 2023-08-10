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





# stri= "the quick brown fox jumps over the lazy dog the quick brown fox"
# total={}
# def frequent(strin):
    
#     st=strin.split()
#     for a in st:
        
#         if a not in strin:
            
#             total.update({a:1})
#         else:
#             total.update({a:1})
          
#     print(total)

# frequent(stri)
     

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


########## with function
# list=[2,3,5,4,7,9,8,1]
# sum=9
# def find_sum(num):
#     pairs=""
#     for i in range(len(num)):
#         for j in range(i+1,len(num)):
#             if num[i]+num[j]==sum:
#                 pairs=pairs+str((num[i],num[j]))+","
#     return pairs

# print(find_sum(list))


####### without function
# list=[2,3,5,4,7,9,8,1]
# sum=9

# pairs=""
# for i in range(len(list)):
#     for j in range(i+1,len(list)):
#         if list[i]+list[j]==sum:
#             pairs=pairs+str((list[i],list[j]))+","

# print(pairs)