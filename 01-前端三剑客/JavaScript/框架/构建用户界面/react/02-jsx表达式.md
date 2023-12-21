# 1.介绍
* JSX 是一种 JavaScript 语言的扩展,允许在 JavaScript 代码中嵌入 HTML 内容;
* JSX 并不是 HTML,而是 JavaScript 的语法扩展,它具有 JavaScript 的全部功能;
* JSX 最终会通过 Babel 编译成 JavaScript 代码;
* JSX 中,某些操作可能会自动调用对象的某些方法,例如 flat 方法

# 2.在jsx中通过大括号使用JavaScript
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
const user = {
  firstName: 'Gregorio',
  lastName: 'Y.',
};

export default function Greeting() {
  return (
    <h1>
      Hello, {user.firstName} {user.lastName}!
    </h1>
  );
}
```
## 2.4 在 JSX 的大括号内使用 JavaScript 数组
* 在 JSX 中,如果一个数组对象出现在某个元素中,并且该元素需要进行某种处理,那么可能会自动调用该对象的 flat 方法
```js
const todos =
  ['Clean room', 'Feed cat', 'Go to gym'];

export default function TodoList() {
  return (
    <ul>
      {todos.map(
        (todo) => <li key={todo}>{todo}</li>
      )}
    </ul>
  );
}
```

# 3.注意事项
* 组件的状态或属性发生变化时，React会重新渲染组件，并计算大括号内的表达式以获取最新的值