// 首先，找到数组中最小的那个元素，其次，将它和数组的第一个元素交换位置（如果第一个元素就是最小元素那么它就和自己交换）。再次，在剩下的元素中找到最小的元素，将它与数组的第二个元素交换位置。如此往复，直到将整个数组排序。这种方法叫做选择排序

function selectionSort(arr) {  
  let len = arr.length;  
  for(let i = 0; i < len - 1; i++) {  
      let minIndex = i;  
      for(let j = i + 1; j < len; j++) {  
          if(arr[j] < arr[minIndex]) { //如果当前元素比最小元素还小，那么将当前元素的索引保存为最小索引  
              minIndex = j;  
          }  
      }  
      if(minIndex != i) { //如果最小元素的索引和初始索引不一样，说明我们需要交换元素  
          let temp = arr[i];  
          arr[i] = arr[minIndex];  
          arr[minIndex] = temp;  
      }  
  }  
  return arr;  
}
// 使用示例  
let arr = [64, 25, 12, 22, 11,12];  
console.log("Original array: ", arr); 
console.time() 
arr = selectionSort(arr);  
console.timeEnd()
console.log("Sorted array: ", arr);