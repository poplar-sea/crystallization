package main

import "fmt"

func insertionSort(arr []int) []int {
	for i := 1; i < len(arr); i++ {
		key := arr[i]
		j := i - 1
		for j >= 0 && arr[j] > key {
			arr[j+1] = arr[j]
			j--
		}
		arr[j+1] = key
		fmt.Println(arr)
	}
	return arr
}

func main() {
	arr := []int{64, 34, 25, 12, 22, 11, 90}
	// fmt.Println("Unsorted array:", arr)
	sortedArr := insertionSort(arr)
	fmt.Println("Sorted array:", sortedArr)
}
