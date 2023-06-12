# 1. golang的安装
## 1.macOs
```
brew install go
或者
brew install golang
```
## 2.ubuntu
```
apt install golang-go
```
# 2.go语言的基础组成
* 包声明
* 引入包
* 函数
* 变量
* 语句 & 表达式
* 注释
```go
// 当前程序的包名
package main

// 导入其他包
import . "fmt"

// 常量定义
const PI = 3.14

// 全局变量的声明和赋值
var name = "gopher"

// 一般类型声明
type newType int

// 结构的声明
type gopher struct{}

// 接口的声明
type golang interface{}

// 由main函数作为程序入口点启动
func main() {
    Println("Hello World!")
}
```
# 3.执行go程序
## 1.run
```bash
go run hello.go
```
## 2.build
```bash
$ go build hello.go 
$ ./hello 
```
## 3.补充说明
* 程序一般由关键字、常量、变量、运算符、类型和函数组成。
* 程序中可能会使用到这些分隔符：括号 ()，中括号 [] 和大括号 {}。
* 程序中可能会使用到这些标点符号：```.```、```,```、```;```、```:``` 和 ```…```
* ```go build main.go``` 在哪个文件夹下执行，默认就在哪个文件夹下生成可执行文件
[官方api中文版](https://studygolang.com/pkgdoc)