# 1.on
* process对象部署了EventEmitter接口，可以使用on方法监听各种事件，并指定回调函数。
```js
process.on('uncaughtException', function(err){
  console.error('got an error: %s', err.message);
  process.exit(1);
});

setTimeout(function(){
  throw new Error('fail');
}, 100);
// 上面代码是process监听Node的一个全局性事件uncaughtException，只要有错误没有捕获，就会触发这个事件。
```
* process支持的事件还有下面这些:
  * data事件：数据输出输入时触发
  * SIGINT事件：接收到系统信号SIGINT时触发，主要是用户按Ctrl + c时触发。
  * SIGTERM事件：系统发出进程终止信号SIGTERM时触发
  * exit事件：进程退出前触发

# 2.EventEmitter
* EventEmitter 是 JavaScript 中的一个类，允许对象发出和监听事件。它通常用于 Node.js 中处理异步操作和事件驱动编程。
```js
// 1.创建一个实例
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
// 2.使用 on 方法来监听事件
myEmitter.on('event', () => {
  console.log('事件被触发');
});
// 3.使用 emit 方法触发一个事件
myEmitter.emit('event');

// 4. 向事件监听器传递参数
myEmitter.on('eventWithArgs', (arg1, arg2) => {
  console.log(`事件被触发，参数为：${arg1}, ${arg2}`);
});

myEmitter.emit('eventWithArgs', '参数1', '参数2');
// EventEmitter 还有其他方法，如 once（只监听一次事件）、removeListener（移除特定的监听器）和 removeAllListeners（移除特定事件的所有监听器）。
```
* 总的来说，EventEmitter 是 JavaScript 中处理事件和异步操作的强大工具。

# 3. process属性
## 3.1 argv
* 该属性是一个数组；
* 第一个值为当前可执行程序的路径
* 第二个值为正在被执行的JavaScript文件的路径
* 命令行参数是从第三位开始的