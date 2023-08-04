# 1.钩子列表

* preinstall：包安装之前执行；
* postinstall：包安装成功后执行；
* preuninstall：包被卸载之前执行；
* postuninstall：包被卸载之后执行；
* poststart：当npm start执行后触发；
* poststop：当npm stop执行后触发；
* posttest：当npm test执行后触发。

# 2. 定义位置
```package.json
scripts: {
  "postinstall": "nodo install.js"
}
```