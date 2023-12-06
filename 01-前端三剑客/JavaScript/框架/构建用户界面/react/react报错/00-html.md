# 1. react-dom.development.js:67 Warning: validateDOMNesting(...): <div> cannot appear as a descendant of ```<p>```
```js
/*这个警告信息来自React，它告诉我们你有一个<div>元素作为<p>元素的子元素，这是不符合HTML的嵌套规则的。在HTML中，<p>元素只能包含文本和其他允许的内联元素，而不能包含块级元素，如<div>。

要解决这个问题，你需要调整你的代码以确保<div>不是<p>的子元素。以下是一个简单的例子来解释这个问题和解决方案：*/

```
```jsx
// 问题
<p>  
  <div>这是一个问题</div>  
</p>
```
```jsx
// 解决
<p>这是一个问题</p>  
<div>或者这样放置div</div>
```