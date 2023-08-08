# lis=[2,4,5,3,3,7,9,9,9,4,1,6]
# duplicate=[]
# duplicate1=[]
# previous=None
# for x in range(len(lis)):
#     #print(x)
#     if lis[x]==previous:
#         duplicate.append(lis[x])
#         previous=lis[x]
#     else:
#         duplicate1.append(lis[x])
# print (duplicate)




# lis = ["a","b","c","d","e","f","g","h","i","j"]
# for each in range(len(lis)):
#      print(each+1, lis[each])



# def find_next_duplicate(lst):
#     seen = {}
    
#     for element in lst:
#         if element in seen:
#             return element
#         seen[element] = True
    
#     return None

# # Test the function
# my_list = [1, 2, 3, 4, 2, 5, 6, 4, 7]
# next_duplicate = find_next_duplicate(my_list)

# if next_duplicate is not None:
#     print(f"The next duplicate element is: {next_duplicate}")
# else:
#     print("No duplicate elements found.")






# from collections import Counter

# def find_frequent_numbers(input_list):
#     counter = Counter(input_list)
#     frequent_numbers = [num for num, count in counter.items() if count > 1]
#     return frequent_numbers

# # Input list
# input_list = [5, 6, 3, 3, 2, 5, 4, 9, 9, 9, 6]

# # Find frequent numbers
# frequent_numbers = find_frequent_numbers(input_list)

# # Output
# print("Frequently repeated numbers:", frequent_numbers)



nums=[2,3,4,4,2,5,9,9,9,4,5,5]

def find_next_duplicate(nums):
    duplicates=[]
    for i in range(len(nums)-1):
        if nums[i]==nums[i+1] and nums[i] not in duplicates:
            duplicates.append(nums[i])
    return duplicates

print(find_next_duplicate(nums))

