import time  

def bubble_sort(arr):  
    n = len(arr)  
    for i in range(n):  
        for j in range(0, n-i-1):  
            if arr[j] > arr[j+1]:  
                arr[j], arr[j+1] = arr[j+1], arr[j]  
    return arr
arr = [64, 25, 12, 22, 11,12]
print("Original array: ", arr); 
start_time = time.time() * 1000
arr = bubble_sort(arr)
end_time = time.time() * 1000 
print(start_time)
print(end_time)
print(f"代码执行时间: {end_time - start_time} 秒")
print("Sorted array: ", arr)