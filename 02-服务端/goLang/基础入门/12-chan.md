# 1. 什么是channel管道
* 它是一个数据管道，可以往里面写数据，从里面读数据。
* channel 是 goroutine 之间数据通信桥梁，而且是线程安全的。
* channel 遵循先进先出原则，写入，读出数据都会加锁。
* channel 可以分为 3 种类型：
  * 只读 channel，单向 channel
  * 只写 channel，单向 channel
  * 可读可写 channel
* channel 还可按是否带有缓冲区分为：
  * 带缓冲区的 channel，定义了缓冲区大小，可以存储多个数据
  * 不带缓冲区的 channel，只能存一个数据，并且只有当该数据被取出才能存下一个数据