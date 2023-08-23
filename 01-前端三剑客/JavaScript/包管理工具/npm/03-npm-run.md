# 1. npm的sctipts

* npm run 命令执行时，会把./node_modules/.bin目录添加到执行环境的PATH变量中。全局的没有安装的包，在node_modules中安装了，通过npm run 可以调用该命令。
* 执行npm 脚本时要传入参数，需要在命令后加 -- 表明，比如 npm run test -- --grep="pattern" 可以将--grep="pattern"参数传给test命令。
* npm 还提供了pre和post两种钩子的机制，可以定义某个脚本前后的执行脚本。
* 运行时变量：npm run 的脚本执行环境内，可以通过环境变量的方式获取更多的运行相关的信息。可以通过process.env对象访问获得：
  * npm_lifecycle_event：正在运行的脚本名称
  * npm_package_：获取当前package.json中某一个字段的匹配值：如包名npm_package_name
  * npm_package__：package中的嵌套字段。
* ```npm run``` 除第一个是可执行的命令，以空格分割的任何字符串都是参数：
  ```json
  // 传入参数
  "scripts": { 
    "serve": "vue-cli-service serve", 
    "serve1": "vue-cli-service --serve1", 
    "serve2": "vue-cli-service -serve2", 
    "serve3": "vue-cli-service serve --mode=dev --mobile -config build/example.js" 
  } 
  ```
  ```js
  // 执行npm run serve3命令，process.argv的具体内容
  [ '/usr/local/Cellar/node/7.7.1_1/bin/node', 
  '/Users/mac/Vue-projects/hao-cli/node_modules/.bin/vue-cli-service', 
  'serve', 
  '--mode=dev', 
  '--mobile', 
  '-config', 
  'build/example.js' 
  ] 
  ```