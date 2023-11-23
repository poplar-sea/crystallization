# 1. 介绍
UMD规范只是一种通用的写法，是在amd和cjs两个流行而不统一的规范情况下，才催生出umd来统一规范的，umd前后端均可通用
# 2. 代码实例
```js
 (function (root, factory) {
        if (typeof define === 'function' && define.amd) {
            // AMD
            define(['jquery', 'underscore'], factory);
        } else if (typeof exports === 'object') {
            // Node, CommonJS之类的
            module.exports = factory(require('jquery'), require('underscore'));
        } else {
            // 浏览器全局变量(root 即 window)
            root.returnExports = factory(root.jQuery, root._);
        }
    }(this, function ($, _) {
        // 属性
        var PI = Math.PI;
        
        // 方法
        function a() { };                   // 私有方法，因为它没被返回
        function b() { return a() };        // 公共方法，因为被返回了
        function c(x, y) { return x + y };  // 公共方法，因为被返回了
    
        // 暴露公共方法
        return {
            PI,
            b: b,
            c: c
        }
    }));
```