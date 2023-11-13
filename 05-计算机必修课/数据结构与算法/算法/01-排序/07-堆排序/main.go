package main

import "fmt"

// Heapify函数用于调整堆，确保父节点大于或等于其子节点
func heapify(arr []int, n, i int) {
	largest := i
	left := 2*i + 1
	right := 2*i + 2

	if left < n && arr[left] > arr[largest] {
		largest = left
	}

	if right < n && arr[right] > arr[largest] {
		largest = right
	}

	if largest != i {
		arr[i], arr[largest] = arr[largest], arr[i]
		heapify(arr, n, largest)
	}
}

// HeapSort函数用于堆排序，将数组arr从大到小排序并存储到原数组中
func heapSort(arr []int) {
	n := len(arr)

	// 从最后一个非叶子节点开始，逆序遍历整个堆，构建最大堆
	for i := n/2 - 1; i >= 0; i-- {
		heapify(arr, n, i)
	}

	// 从堆顶开始，将最大元素交换到数组末尾，重新调整堆，保持最大堆性质
	for i := n - 1; i > 0; i-- {
		arr[0], arr[i] = arr[i], arr[0]
		heapify(arr, i, 0)
	}
}

func main() {
	arr := []int{10, 8, 6, 4, 2, 9, 7, 5, 3, 1}
	heapSort(arr)
	fmt.Println(arr) // [10 9 8 7 6 5 4 3 2 1]
}
