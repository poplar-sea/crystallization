import time  

def selection_sort(arr):  
    n = len(arr)  
    for i in range(n):  
        # 找到未排序序列中的最小元素  
        min_index = i  
        for j in range(i+1, n):  
            if arr[j] < arr[min_index]:  
                min_index = j  
        # 将最小元素交换到已排序序列的末尾
        # 多重赋值语句
        arr[i], arr[min_index] = arr[min_index], arr[i]  
    return arr

arr = [64, 25, 12, 22, 11,12]
print("Original array: ", arr); 
start_time = time.time() * 1000
arr = selection_sort(arr)
end_time = time.time() * 1000 
print(start_time)
print(end_time)
print(f"代码执行时间: {end_time - start_time} 秒")
print("Sorted array: ", arr)