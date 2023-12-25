function quickSort(arr, low = 0, high = arr.length - 1) {  
  if (low < high) {  
      let pivotIndex = partition(arr, low, high);  
      quickSort(arr, low, pivotIndex - 1);  
      quickSort(arr, pivotIndex + 1, high);  
  }  
  return arr;  
}  

function partition(arr, low, high) {  
  let pivot = arr[high];  
  let i = low;  
  for (let j = low; j < high; j++) {  
      if (arr[j] <= pivot) { // 注意这里的arr[j] <= pivot，是快速排序优化的一部分，称为“三数取中法”  
          [arr[i], arr[j]] = [arr[j], arr[i]];  
          i++;  
      }  
  }  
  [arr[i], arr[high]] = [arr[high], arr[i]];  
  return i;  
}

let arr = [64, 34, 25, 12, 22, 11, 90];  
console.log("Original array: ", arr); 
console.time() 
arr = quickSort(arr);  
console.timeEnd()
console.log("Sorted array: ", arr);