# CommonJS
* 主要使用```module.exports```与```requqire```
* ```require```语法是同步载入，因此他必须等待```require```执行完成。
# 2. 介绍
* CommonJS 是以在浏览器环境之外构建 JavaScript 生态系统为目标而产生的项目，比如在服务器和桌面环境中。
* 采用同步加载模块的方式，也就是说只有加载完成，才能执行后面的操作。
* CommonJS 代表：Node 应用中的模块，通俗的说就是你用 npm 安装的模块。
* 它使用 require 引用和加载模块，exports 定义和导出模块，module 标识模块。
* 使用 require 时需要去读取并执行该文件，然后返回 exports 导出的内容
```js
//定义模块 math.js
 var random=Math.random()*10;
 function printRandom(){
     console.log(random)
 }

 function printIntRandom(){
     console.log(Math.floor(random))
 }
 //模块输出
 module.exports={
     printRandom:printRandom,
     printIntRandom:printIntRandom
 }
 //加载模块 math.js
 var math=require('math')
 //调用模块提供的方法
 math.printIntRandom()
 math.printRandom()
```

# 3. module.exports 和 exports的区别
* 在node执行一个文件时,会给这个文件内生成一个 exports 对象和一个 module 对象,而这个module 对象又有一个属性叫做 exports
* ```exports``` 对象是 ```module``` 对象的一个属性,在初始时 module.exports 和 exports 指向同一块内存区域
* 模块导出的是 ```module.exports``` , exports 只是对它的引用,在不改变exports 内存的情况下,修改exports 的值可以改变 module.exports 的值
* 导出时尽量使用 module.exports ,以免因为各种赋值导致的混乱

# 4. 代码实例
```js
/* 定义模块 */
    // 这里以定义一个名为 math.js 文件模块为例
    const PI= Math.PI;
    
    function sumFn(a, b) {
      return a + b;
    };
	
    // 可向外暴露函数、变量
    module.exports = {
      PI,
      sum: sumFn
    }
    
	/* 调用模块 */
    // 必须加./路径，不加的话只会去node_modules文件夹中找
    const math = require('./math');
    math.sum(2, 5);
    
    // 引用核心模块时，不需要带路径 和 后缀（会去node_modules文件夹中找）
    const http = require('http');
    http.createService(...).listen(3000);
```