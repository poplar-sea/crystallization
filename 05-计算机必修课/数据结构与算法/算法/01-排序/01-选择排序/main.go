package main

import (
	"fmt"
	"time"
)

func selectionSort(arr []int) []int {
	lenArr := len(arr)
	for i := 0; i < lenArr; i++ {
		minIndex := i
		for j := i + 1; j < lenArr; j++ {
			if arr[j] < arr[minIndex] {
				minIndex = j
			}
		}
		// 多重赋值语句
		arr[i], arr[minIndex] = arr[minIndex], arr[i]
	}
	return arr
}

func main() {
	arr := []int{64, 25, 12, 22, 11}
	fmt.Println("go-Original array: ", arr)
	startTime := time.Now()
	sortedArr := selectionSort(arr)
	endTime := time.Now()
	// 计算时间差
	duration := endTime.Sub(startTime)
	// 打印时间差
	fmt.Println("开始时间:", startTime)
	fmt.Println("结束时间:", endTime)
	fmt.Println("时间差:", duration)
	fmt.Println("Sorted array: ", sortedArr)
}
