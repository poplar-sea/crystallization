# Performance面板概览
![Performance](/images/Chrome_performance.png)
# Network
## Newworktab中的timing部分
![newwork](/images/network_timing.png)
## timeing部分属性简介
* Queueing（排队）：浏览器会在一些情况下让请求排队等待，比如这个请求的优先级不高，有更高优先级的请求存在；在使用 HTTP/1.0 或者 HTTP/1.1 时，同域请求最大并发数量为 6 个，此时已经达到了最大值；而上图中的请求是属于最高优先级的第一个请求，即浏览器正在硬盘缓存中分配空间，从图上可以看到有 14.72ms 用于在磁盘缓存中分配空间。
* Stalled（停顿）：它可能会因为上述排队中的任何原因而停顿。
* DNS lookup（DNS 查询）：解析这个域名的IP地址。需要注意的是，当我们多次访问同一域名时，这部分不会出现在 timing 中。
* Initial connection（初始连接）：浏览器建立连接，包括 tcp 三次握手、重试以及协商 SSL。图中的紫色部分，就代表了在初始连接过程中的 SSL 协商部分。
* Request sent（发送请求）：正在发送请求
* Waiting (TTFB) 等待第一字节时间：浏览器在等待第一个响应的字节，TTFB 即 Time To First Byte。这个时间包括一个往返的延迟和服务准备响应的时间之和。
* Content Download （内容下载）：浏览器正在接收响应，浏览器可以通过网络或者 serviceWorker 来直接接收。这个值是读取响应体的总时间。由于网络不佳或者浏览器正在忙于执行其他工作而延迟了对响应体的读取，读取的时间可能会比预期的要长。
## 线箱图
![线箱图](/images/xianxiangtu.png)
* 水平箱线图中左上角的深蓝色小方块代表着这个请求有着更高的优先级。遇到有浅蓝色的，则表示较低优先级;
* 左边横线对应 Network 面板中显示的 Request Sent之前的所有事情的时间
* 浅色的 bar对应 Network 中 Request Sent 和 Waiting（TTFB）的时间
* 深色的 bar对应 Network中Content Download 的时间
* 右边的横线表示等待主线程所花费的时间，在 Network 面板中没有体现
* 在 summary 中显示 Duration 1.08 s (822.88 ms Network transfer + 260.20 ms resource loading)。这个的意思是 260ms 的时间是在 resource loading;
* 这里resource loading所花费的时间其实就是箱线图右侧的那条横线，等待主线程的时间。

# 资源加载优先级
1. 访问域名获取的 HTML、 以及预加载资源时as="style"，拥有最高优先级;
2. 普通的 ```<script> ```、 ```<link>``` 标签、 使用```preload```的预加载，拥有高优先级;
3. 使用了 ```async/defer``` 的 ```<script>``` 、```as="script"```的预加载资源拥有低优先级;
4. 使用了```<link rel="stylesheet" href="//s1.hdslb.com/bfs/static/jinkela/long/font/medium.css" media="print" onload="this.media='all'">```这种方式的，和不加 ```as="xxx"```的 ```prefetch``` 预加载，就相当于异步加载，拥有最低优先级




// https://zhuanlan.zhihu.com/p/607779991