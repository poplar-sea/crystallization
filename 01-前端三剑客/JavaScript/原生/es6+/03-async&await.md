# 1. async 起什么作用?
* async 函数（包含函数语句、函数表达式、Lambda表达式）会返回一个 Promise 对象；
* 如果在函数中 return 一个直接量，async 会把这个直接量通过 Promise.resolve() 封装成 Promise 对象。
* 在最外层不能用 await 获取其返回值的情况下，我们当然应该用原来的方式：then() 链来处理这个 Promise 对象
* 联想一下 Promise 的特点——无等待，所以在没有 await 的情况下执行 async 函数，它会立即执行，返回一个 Promise 对象，并且，绝不会阻塞后面的语句

# 2. await 到底在等啥?
* await 等待的是一个表达式，这个表达式的计算结果是 Promise 对象或者其它值;
* 如果它等到的不是一个 Promise 对象，那 await 表达式的运算结果就是它等到的东西。
* 如果它等到的是一个 Promise 对象，它会阻塞后面的代码，等着 Promise 对象 resolve，然后得到 resolve 的值，作为 await 表达式的运算结果。
# 3.本身就返回 Promise 对象，加 async 和不加 async 的区别
* 如果一个函数本身就返回 Promise 对象，加 async 和不加 async 还是有一点点区别：加了 async 之后外面得到 Promise 对象并不是 return 的那一个
```js
(() => {
    let promise;
    async function test() {
        promise = new Promise(resolve => resolve(0));
        promise.mark = "hello";
        return promise;
    }

    const gotPromise = test();
    console.log(`is same object?: ${promise === gotPromise}`);  // false
    console.log(`promise.mark: ${promise.mark}`);               // hello
    console.log(`gotPromise.mark: ${gotPromise.mark}`);         // undefined
})();
```
```js
async function test1() { 
}
async function test2() {
    return 1
}
async function test3() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve(111)
        }, 10);
    })
}
async function test4() {
    await  test3()
    return
}
async function test5() {
    const res = await  test3()
    console.log(res)
    return res
}
async function test6() {
    throw new Error()
}
async function test7() {
    return Promise.reject(111)
}
async function test8() {
    return await Promise.reject(111)
}
async function test9() {
    const res = await  test3()
    console.log(res)
    return Promise.resolve(res)
}
async function test10() {
    return Promise.resolve(1111)
} 
async function test11() {
    return Promise.resolve({a: 1})
}
const test_value = test11()
console.log('test1==========', test1())
console.log('test2==========', test2())
console.log('test3==========', test3())
console.log('test4==========', test4())
console.log('test5==========', test5())
console.log('test6==========', test6())
console.log('test7==========', test7())
console.log('test8==========', test8())
console.log('test9==========', test9())
console.log('test10==========', test10())
console.log('test_value==========', test_value)
console.log('test_value.a==========', test_value.a)
console.log('test5_result==========', test5().then((res) => console.log('test5_result', res)))
/**
 * test1========== Promise {<fulfilled>: undefined}
index.html:96 test2========== Promise {<fulfilled>: 1}
index.html:97 test3========== Promise {<pending>}
index.html:98 test4========== Promise {<pending>}
index.html:99 test5========== Promise {<pending>}
index.html:100 test6========== Promise {<rejected>: Error
    at test6 (file:///C:/Users/1018/Desktop/test/test/index.html:75:11)
    at file:///C:/Use…}
index.html:101 test7========== Promise {<pending>}
index.html:102 test8========== Promise {<pending>}
index.html:103 test9========== Promise {<pending>}
index.html:104 test10========== Promise {<pending>}
index.html:105 test_value========== Promise {<pending>}
index.html:106 test_value.a========== undefined
index.html:107 test5_result========== Promise {<pending>}
index.html:75 Uncaught (in promise) Error
    at test6 (index.html:75:11)
    at index.html:100:32
test6 @ index.html:75
(anonymous) @ index.html:100
index.html:81 Uncaught (in promise) 111
test8 @ index.html:81
await in test8 (async)
(anonymous) @ index.html:102
index.html:1 Uncaught (in promise) 111
Navigated to file:///C:/Users/1018/Desktop/test/test/index.html
index.html:71 111
index.html:85 111
index.html:71 111
index.html:107 test5_result 111
 */
```