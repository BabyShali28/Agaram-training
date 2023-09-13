# n=10
# sum=0
# print("table 6")
# for k in range(n):
#     sum=sum+1
#     ans=sum*6
#     print(sum,"*""6""=",ans)

# for i in range(1,6): 
#     for j in range(i):
       
#         print("*",end='')
#     print('\n')


# for i in range(4,0,-1):
#     for j in range(j):
#         print("*",end='')
#     print('\n')

# for i in range(4):
#     for j in range(i+1):
#         print("*",end='')
#     print('\n')


# for i in range(1,6):
#     for j in range(5,i,-1):
#         print(" ",end='')
    
#     for k in range(1,i+1):
#         print("*",end='')
#     print('\n')

# n=int(input("enter the number:"))
# for i in range(n):
#     for j in range(n,i,-1):
#         print(" ",end='')
#     for k in range(0,i+1):
#         print("*"+" ",end='')
        
#     for l in range(n,i,-1):
#         print(" ",end='')
#     print("\n")

n=5
for i in range(n):
    for j in range(n-i-1):
        print(" ",end='')
    for k in range(2*i+1):
        print("*",end='')
    print("\n")



