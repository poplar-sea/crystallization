# 1. 触发自定义事件
* EventTarget 的 dispatchEvent() 方法会向一个指定的事件目标派发一个 Event，并以合适的顺序（同步地）调用所有受影响的 EventListener
[dispatchEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/dispatchEvent)
# 2. 注册事件
* EventTarget.addEventListener() 方法将指定的监听器注册到 EventTarget 上，当该对象触发指定的事件时，指定的回调函数就会被执行
[addEventListener](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)
