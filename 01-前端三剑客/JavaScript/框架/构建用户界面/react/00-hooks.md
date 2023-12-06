# 1. useEffect
## 1.1 参数
* useEffect接受两个参数：
  * 一个 ```setup``` 函数 ，其 setup 代码 用来连接到该系统:
    * 它应该返回一个 ```清理函数（cleanup）```，其 cleanup 代码 用来与该系统断开连接。
  * 一个 ```依赖项列表```，包括这些函数使用的每个组件内的值。
## 1.2 cleanup 执行的时机
* 重新渲染 ```依赖项``` 变更的组件后，首先，使用旧的 props 和 state 运行 cleanup 代码，然后，使用新的 props 和 state 运行 setup 代码；
* 当组件从页面卸载后，```cleanup``` 代码 将运行最后一次

## 1.3 注意事项
* useEffect 是一个 Hook，因此只能在 组件的顶层 或自己的 Hook 中调用它，而不能在循环或者条件内部调用;
* 如果你的 Effect 不是由交互（比如点击）引起的，那么 React 会让浏览器 在运行 Effect 前先绘制出更新后的屏幕;
* 如果你一定要阻止浏览器重新绘制屏幕，则需要用 ```useLayoutEffect``` 替换 ```useEffect```