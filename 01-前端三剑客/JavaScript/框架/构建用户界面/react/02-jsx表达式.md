# 1.在jsx中通过大括号使用JavaScript
## 2.1 在 JSX 的大括号内引用 JavaScript 变量
```js
export default function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}
```
## 2.2在 JSX 的大括号内调用 JavaScript 函数
```js
const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'zh-CN',
    { weekday: 'long' }
  ).format(date);
}

export default function TodoList() {
  return (
    <h1>To Do List for {formatDate(today)}</h1>
  );
}
```
## 2.3 在 JSX 的大括号内使用 JavaScript 对象
```js
export default function TodoList() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
```
# 2.注意事项
* 组件的状态或属性发生变化时，React会重新渲染组件，并计算大括号内的表达式以获取最新的值