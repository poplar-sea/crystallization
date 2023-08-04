# 1. type的用法
```go
// 1. 第一种 给一个类型定义别名,这种别名实际上是为了代码的可读性
type myByte = byte // 这个类型本质上仍然是uint8，无非就是在代码编码阶段可读性强而已

// 2. 第二种 基于一个已有的类型定义一个新的类型
type myInt int

// 3. 第三种 定义结构体
type Course struct {
  name string
  price int
}
// 4. 第四种 定义接口
type Callabel interface {

}
// 5. 第五种 定义函数别名
type handle func(str string)
```