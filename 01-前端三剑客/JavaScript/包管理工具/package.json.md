# 1. main
* 它可以用来指定加载的入口文件。
* 假如你的项目是一个 npm 包，当用户安装你的包后，require('my-module') 返回的是 main 字段中所列出文件的 module.exports 属性。
* 当不指定main 字段时，默认值是模块根目录下面的index.js 文件
# 2. files
* files 字段用于描述我们使用 npm publish 命令后推送到 npm 服务器的文件列表，如果指定文件夹，则文件夹内的所有内容都会包含进来
# 3. homepage
* 在package.json文件中，homepage字段通常用于指定包的官方网站或主页。
* 这个字段可以提供一个链接到包的官方文档、使用指南、示例代码等资源的URL。

# 4. main 和 module
* 通过 ```npm install xxx``` 安装某个包时，之后在项目中引入该包；绝大多数情况下，针对于引入的包入口文件都是取决于这两个字段的设置
* 当你在项目中使用 ```const vue = require('vue')``` 时和使用 ```import vue from 'vue'``` 进行引入时实际上引入的是完全不同的两个文件
  * 前者由于是 CJS 的引入方式，所以会自动寻找对应 main 字段中的路径
  * 后者由于 ESM的方式则会自动寻找对应的 module 字段中的路径
  * 如果以 ESM 的方式引入该包时，首先会去寻找对应的 module 字段。
  * 如果 module 不存在的情况它会接下来去寻找对应的 main 字段。
  * 如果 main 字段也不存在的话，默认是会寻找当前包中的 index.js 作为入口文件。
# 5. browser
* 也是针对于特定环境（浏览器环境）下的入口文件定义字段
* 配置 browser 为一个单一的字符串时它会替换 main 字段作为浏览器环境下的包入口文件
* 配置为一个 Map 对象表示声明需要替换的路径或者文件

# 6. exports
* exports 在 node v12.7.0 后提供了对于入口文件的替代品字段，它的优先级是高于任何入口字段的（module、main、browser）
* exports的作用：
  * 路径封装：
    ```json
    {
    // 表示该包仅存在默认导出，默认导出为 ./index.js
    "exports": "./index.js"
  }

  // 上述的写法相当于
  {
    "exports": {
      ".": "./index.js"
    }
  }
    {
    "exports": {
      // . 表示引入包默认的导出文件路径， 比如 import qingfeng from 'qingfeng'
      // 这里的 . 即表示未携带任何路径的 qingfeng，相当于默认导出 ./index.js 文件的内容
      ".": "./index.js",
      // 同时额外定义一个可以被引入的子路径
      // 可以通过 import qingfengSub from 'qingfeng/submodule.js' 进行引入 /src/submodule.js 的文件
      "./submodule.js": "./src/submodule.js"
    }
  }
    ```
  * 条件导出
    ```json
    // package.json
  {
    "exports": {
      // ESM 引入时的入口文件
      "import": "./index-module.js",
      // CJS 方式引入时寻找的路径
      "require": "./index-require.cjs"
    },
  }

  // 相当于
  {
    "exports": {
      "import": {
          ".":  "./index-module.js"
      },
      "require": {
          ".": "./index-require.cjs"
      }
    },
  }

    ```