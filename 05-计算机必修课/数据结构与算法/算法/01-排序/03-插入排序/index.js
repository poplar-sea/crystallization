function insertionSort(arr) {  
  let n = arr.length;  
  for (let i = 1; i < n; i++) {  
      let key = arr[i];  
      let j = i - 1;  
      while (j >= 0 && arr[j] > key) {  
          arr[j + 1] = arr[j];  
          j--;  
      }  
      arr[j + 1] = key;  
  }  
  return arr;  
}

// 使用示例  
let arr = [64, 25, 12, 22, 11,12];  
console.log("Original array: ", arr); 
console.time() 
arr = insertionSort(arr);  
console.timeEnd()
console.log("Sorted array: ", arr);