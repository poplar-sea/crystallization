package main

import (
	"fmt"
	"time"
)

const (
	A = 1 + iota
	B
	C
	E = iota
)

var zeroslice *int

func main() {
	fmt.Println(time.Now().Unix())
	fmt.Printf("B的值为：%d C的值为：%d E的值为：%d\n", B, C, E)
	// zeroslice = append(zeroslice, 1)
	fmt.Println(zeroslice)
}

// func main() {
// 	ch := make(chan int, 0)
// 	fmt.Println(time.Now().Unix())
// 	go func() {
// 		a := <-ch
// 		fmt.Printf("%d 读出%d\n", time.Now().Unix(), a)
// 	}()
// 	time.Sleep(2 * time.Second)
// 	go func() {
// 		ch <- 10
// 		fmt.Println(time.Now().Unix(), "写入10成功")
// 	}()

// 	time.Sleep(1 * time.Second)
// }
