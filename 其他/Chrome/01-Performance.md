# 1. FPS
## 1.1 定义：
FPS是图像领域中的定义，是指画面每秒传输帧数，通俗来讲就是指动画或视频的画面数。 每秒钟帧数越多，所显示的动作就会越流畅。
## 1.2 打开方式
* 谷歌：
  * 打开F12调试工具，
  * 输入command + shift + p输入frame,
  * 找到show frames per second FPS meter，
  * 然后回车浏览器左上角就会出现帧数的显示
# 2.CPU图标
* CPU图表中的颜色与“性能”面板底部的“摘要”选项卡中的颜色相对应。
* 事实上，CPU图表充满了颜色，这意味着 CPU 在录制过程中已达到极限。
* 每当您看到 CPU 长时间处于最大负载时，就表明您需要寻找减少工作量的方法
# 3.框架
## 3.1 Main(主线程)
* DevTools 显示主线程上随时间变化的活动火焰图。
* x 轴代表一段时间内的记录。
* 每个条代表一个事件。
* 条形越宽意味着事件花费的时间越长。
* y 轴表示调用堆栈，当看到事件堆叠在一起时，这意味着上面的事件导致了下面的事件。
## 3.2 Frames
* 空闲框架（白色）。没有变化。
* 框架（绿色）。按预期及时渲染。
* 部分呈现的框架（黄色，带有稀疏的宽虚线图案）。Chrome 尽力及时渲染至少一些视觉更新。例如，如果渲染器进程的主线程（画布动画）的工作迟到，但合成器线程（滚动）及时完成。
* 掉落的框架（红色，带有密集的实线图案）。Chrome 无法在合理的时间内渲染该帧
## 3.3 Network(网络)
* 请求的组成
  * 请求由左侧的一条线、中间带有深色部分和浅色部分的条形以及右侧的一条线表示；
  * 左行是事件组的所有内容Connection Start，包括在内。换句话说，它是之前的一切Request Sent，排他性的。
  * 条形的浅色部分是Request Sent和Waiting (TTFB)。
  * 条形的深色部分是Content Download。
  * 右边的线本质上是等待主线程所花费的时间。这未在“计时”选项卡中表示。
* 请求按颜色编码如下:
  * HTML：蓝色
  * CSS：紫色
  * JS：黄色
  * 图片：绿色
* 请求左上角的深蓝色方块表示该请求的优先级较高。浅蓝色方块表示优先级较低
## 3.4 Compositor (合成器)
## 3.5 OfflineAudioRender  (离线音频渲染)
## 3.6 ThreadPoolForegroundWorker  (前台线程池工作线程)
## 3.7 ThreadPoolServiceThread (线程池服务线程)
## 3.8 Timings(记录一些关键的时间节点在何时产生的数据信息)

# 4.摘要选项卡

# 5.性能指标
## 5.1 DomContentLoaded(DCL)
* 当 HTML 文档完全解析，且所有延迟脚本（```<script defer src="…">``` 和 ```<script type="module">```）```下载```和```执行```完毕后，会触发 ```DOMContentLoaded``` 事件。
* 它不会等待图片、子框架和异步脚本等其他内容完成加载。
## 5.2 First Paint(FP)
* 指的是页面首次绘制的时间点
## 5.3 First Contentful Paint(FCP)
* 指的是页面首次内容绘制的时间点
## 5.4 Largest Contentful Paint(LCP)
* 指的是页面最大元素被渲染的时间点
## 5.5 Onload(L)
* 当在整个页面及所有依赖资源,如```样式表```和```图片```都已完成加载时触发。
* 可以通过 onload 属性获取此事件。

# 6.Performance面板概览
![Performance](/images/Chrome_performance.png)