# 1. Data Id
## 1.1 格式
```
${prefix}-${spring.profile.active}.${file-extension}
```
* ```${prefix}``` ：默认为 spring.application.name 的值，此时是 注册到nacos的应用名
* ```spring.profiles.active``` ：当前环境对应的 profile，不要省略，一般设置为
  * dev：开发环境
  * test：测试环境
  * prod：生产环境
* ```file-exetension``` ：配置内容的数据格式，可以通过配置项 spring.cloud.nacos.config.file-extension 来配置

[命名空间、分组和 DataID 三者关系](https://juejin.cn/post/7058059018182328334)