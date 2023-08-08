# 1. node架构原理
# 1.1 架构图
![node架构图](/images/node%E6%9E%B6%E6%9E%84%E5%9B%BE.png)
## 1.2 底层解析
* V8：
  * 高性能JavaScript的执行引擎，同时拥有解释执行和编译执行的能力，可以将JavaScript代码编译为底层机器码，Node.js通过V8引擎提供的C++ API使V8引擎解析并执行JavaScript代码，并且通过V8引擎公开的接口和类型把自己内置的C++模块和方法转换为可被JavaScript访问的形式。
* libuv：
  * 高性能、跨平台事件驱动的I/O库，它提供了文件系统、网络、子进程、管道、信号处理、轮询和流的管控机制。
  * 它还包括一个线程池，用于某些不易于在操作系统级别完成的异步工作。
* c-ares：
  * 异步DNS解析库。
  * 用于支持Node.js的DNS模块。
* llhttp：
  * 一款由TypeScript和C语言编写的轻量级HTTP解析器，内存消耗非常小。
* open-ssl：
  * 提供了经过严格测试的各种加密解密算法的实现，用于支持Node.js的crypto模块。
* zlib：
  * 提供同步的、异步的或流式的压缩和解压缩能力，用于支持Node.js的zlib模块。