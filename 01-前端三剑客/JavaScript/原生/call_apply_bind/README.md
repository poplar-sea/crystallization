# 1. call
* 语法： ```func.call(thisArg[,arg1,arg2,...])```
* 作用：立即调用函数，并将```this```绑定到```thisArg```上，同时可以传入参数列表；
* 示例：
```js
function greet(name) {
  console.log(`Hello, ${this.name}! My name is ${name}.`);
}

let user = { name: 'John' };
greet.call(user, 'Alice'); // 输出 "Hello, John! My name is Alice."
```

# 2. apply
* 语法： ```func.apply(thisArg, [argsArray])```
* 作用：与 ```call()``` 类似，也是立即调用函数并将 this 绑定到 thisArg 上，不同之处在于参数是以数组形式传递的
* 示例：
```js
function sum(a, b) {
  return a + b;
}

let numbers = [5, 7];
console.log(sum.apply(null, numbers)); // 输出 12
```

# 3. bind
* 语法： ```func.bind(thisArg[, arg1[, arg2[, ...]]])```
* 作用：不立即调用函数，而是创建一个新的函数实例，这个新函数的 this 值被永久绑定到了 bind() 第一个参数所指定的对象。可以预先设置部分参数，在之后调用时会与额外传入的参数合并；
* 返回值：返回一个新的函数引用，不会立即执行原函数。
* 示例：
```js
function greetWithPrefix(prefix, name) {
  console.log(`${prefix}, ${this.name} says hello to ${name}!`);
}

let user = { name: 'Jane' };
let greetJane = greetWithPrefix.bind(user, 'Mrs.');
greetJane('Bob'); // 输出 "Mrs., Jane says hello to Bob!"
```