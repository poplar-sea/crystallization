function bubbleSort(arr){  
  var len = arr.length;  
  for(var i = 0; i < len - 1; i++){  
    for(var j = 0; j < len - 1 - i; j++){  
      if(arr[j] > arr[j + 1]){  
        var temp = arr[j];  
        arr[j] = arr[j + 1];  
        arr[j + 1] = temp;  
      }  
    }  
  }  
  return arr;  
}
// 使用示例  
let arr = [64, 25, 12, 22, 11,12];  
console.log("Original array: ", arr); 
console.time() 
arr = bubbleSort(arr);  
console.timeEnd()
console.log("Sorted array: ", arr);