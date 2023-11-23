# 1. AMD（Asynchronous Module Definition）
* 异步模块定义，所谓异步是指模块和模块的依赖可以被异步加载，他们的加载不会影响它后面语句的运行。
* 有效避免了采用同步加载方式中导致的页面假死现象。
* AMD是一种规范，具体实现代表：RequireJS。
* 一般说AMD也是指RequireJS
* AMD是预加载，AMD是提前执行，在对应的加载之前导入
# 2. RequireJS
* RequireJS的基本思想是，通过```define```方法，将代码定义为模块；通过```require```方法，实现代码的模块加载
# 2.1 define函数
* 
```
define(id?, dependencies?, factory);
//id ：可选参数，它指的是模块的名字。
//dependencies：可选参数，定义中模块所依赖模块的数组。
//factory：模块初始化要执行的函数或对象
```
* 使用
  ```js
  define("alpha", ["require", "exports", "beta"], function (require, exports, beta) {  
    exports.verb = function() {            
        return beta.verb();            
        //Or:
          //return require("beta").verb();        
      }    
  });
  ```
# 2.2 require() 函数
```
require([module], callback);
//module：一个数组，里面的成员就是要加载的模块.
//callback：模块加载成功之后的回调函数。
```
* 使用
  ```js
  require(["a","b","c"],function(a,b,c){    //code here });
  ```

# 3. 代码实例
```js
/** 网页中引入require.js **/
    <script src="js/require.js" data-main="js/main"></script>
	
	/** 模块定义 **/
	// xxx.js
	define(['自定义模块名 xxx'], function(par){
		console.log('接收在调用时传过来的参数：', par);
		...
	});
	
    /** main.js 入口文件/主模块 **/
    // 首先用config()指定各模块路径和引用名
    require.config({
      baseUrl: "js/lib",
      paths: {
        "jquery": "jquery.min",  // 实际路径为js/lib/jquery.min.js
        "xxx": "xxx", // 实际路径为js/lib/xxx.js
      }
    });
    
    // 执行基本操作
    require(["jquery","xxx"],function($,_){
      // some code here
    });
```
# 4. 缺点
* require.js解决的问题，多个JS文件可以有依赖关系，被依赖的文件需要早于依赖它的文件加载到浏览器，JS加载的时候浏览器停止页面渲染，
* 加载文件越多，页面失去响应时间越长