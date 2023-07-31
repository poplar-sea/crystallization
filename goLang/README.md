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
// 直接执行，不生成任何文件
go run hello.go
```
## 2.build
```bash
// 在当前目录下生成可执行二进制文件
$ go build hello.go 
$ ./hello 
```
## 3.install
```bash
// 会把编译好的结果移动到 bin目录中
$ go install hello.go
```

## 4. mod
* Go Modules 的管理命令为go mod，有很多⼦命令，可以通过go help mod来获取所有的命令。

```go
download：下载go.mod⽂件中记录的所有依赖包。

edit：编辑go.mod⽂件。

graph：查看现有的依赖结构。

init：把当前⽬录初始化为⼀个新模块。

tidy：添加丢失的模块，并移除⽆⽤的模块。默认情况下，Go不会移除go.mod⽂件中的⽆⽤依赖。当依赖包不再使⽤了，可以使⽤go mod tidy命令来清除它。

vendor：将所有依赖包存到当前⽬录下的vendor⽬录下。

verify：检查当前模块的依赖是否已经存储在本地下载的源代码缓存中，以及检查下载后是否有修改。

why：查看为什么需要依赖某模块。
```

## 4.补充说明
* 程序一般由关键字、常量、变量、运算符、类型和函数组成。
* 程序中可能会使用到这些分隔符：括号 ()，中括号 [] 和大括号 {}。
* 程序中可能会使用到这些标点符号：```.```、```,```、```;```、```:``` 和 ```…```
* ```go build main.go``` 在哪个文件夹下执行，默认就在哪个文件夹下生成可执行文件
* 执行顺序：import –> const –> var –>init()–>main()
[官方api中文版](https://studygolang.com/pkgdoc)