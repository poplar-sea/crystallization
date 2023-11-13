def merge_sort(arr):  
    if len(arr) <= 1:  
        return arr  
    mid = len(arr) // 2  
    left = arr[:mid]  
    right = arr[mid:]  
    left = merge_sort(left)  
    right = merge_sort(right)  
    return merge(left, right)  
  
def merge(left, right):  
    result = []  
    i = j = 0  
    while i < len(left) and j < len(right):  
        if left[i] <= right[j]:  
            result.append(left[i])  
            i += 1  
        else:  
            result.append(right[j])  
            j += 1  
    result += left[i:]  
    result += right[j:]  
    return result

arr = [64, 25, 12, 22, 11,12]
print("Original array: ", arr); 
arr = merge_sort(arr)
print("Sorted array: ", arr)