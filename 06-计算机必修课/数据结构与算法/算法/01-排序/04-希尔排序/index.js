function shellSort(arr) {  
  let gap = Math.floor(arr.length / 2);  

  while(gap > 0) {  
      for(let i = gap; i < arr.length; i++) {  
          let temp = arr[i];  
          let j = i;  
          while(j >= gap && arr[j - gap] > temp) {  
              arr[j] = arr[j - gap];  
              j -= gap;  
          }  
          arr[j] = temp;  
      }  
      gap = Math.floor(gap / 2);  
  }  

  return arr;  
}  

let arr = [64, 34, 25, 12, 22, 11, 90];  
console.log("Original array: ", arr); 
console.time() 
arr = shellSort(arr);  
console.timeEnd()
console.log("Sorted array: ", arr);