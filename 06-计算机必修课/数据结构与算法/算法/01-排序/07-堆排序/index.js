function heapify(arr, n, i) {  
  let largest = i;  
  let left = 2 * i + 1;  
  let right = 2 * i + 2;  
  
  if (left < n && arr[left] > arr[largest]) {  
    largest = left;  
  }  
  
  if (right < n && arr[right] > arr[largest]) {  
    largest = right;  
  }  
  
  if (largest !== i) {  
    let swap = arr[i];  
    arr[i] = arr[largest];  
    arr[largest] = swap;  
  
    heapify(arr, n, largest);  
  }  
}  
  
function heapSort(arr) {  
  let n = arr.length;  
  
  for (let i = n / 2 - 1; i >= 0; i--) {  
    heapify(arr, n, i);  
  }  
  
  for (let i = n - 1; i > 0; i--) {  
    let temp = arr[0];  
    arr[0] = arr[i];  
    arr[i] = temp;  
  
    heapify(arr, i, 0);  
  }  
}
let arr = [64, 34, 25, 12, 22, 11, 90];  
console.log("Original array: ", arr); 
console.time() 
arr = heapSort(arr);  
console.timeEnd()
console.log("Sorted array: ", arr);