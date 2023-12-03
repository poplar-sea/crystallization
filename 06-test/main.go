package main

import (
	"fmt"
	"time"
)

func main() {
	ch := make(chan int, 0)
	fmt.Println(time.Now().Unix())
	go func() {
		a := <-ch
		fmt.Printf("%d 读出%d\n", time.Now().Unix(), a)
	}()
	time.Sleep(2 * time.Second)
	go func() {
		ch <- 10
		fmt.Println(time.Now().Unix(), "写入10成功")
	}()

	time.Sleep(1 * time.Second)
}
