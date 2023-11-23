# 1. main
* 它可以用来指定加载的入口文件。
* 假如你的项目是一个 npm 包，当用户安装你的包后，require('my-module') 返回的是 main 字段中所列出文件的 module.exports 属性。
* 当不指定main 字段时，默认值是模块根目录下面的index.js 文件
# 2. files
* files 字段用于描述我们使用 npm publish 命令后推送到 npm 服务器的文件列表，如果指定文件夹，则文件夹内的所有内容都会包含进来