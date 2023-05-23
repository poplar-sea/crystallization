https://juejin.cn/post/6967243012199940110

docker部署Jenkins

补充没有解析到主机的错误
```
Command "git ls-remote -h -- git@github.com:yeni/jenkins-terraform.git HEAD" returned status code 128: stdout: stderr: No ECDSA host key is known for github.com and you have requested strict checking. Host key verification failed. fatal: Could not read from remote repository
```
解决方案
```
ssh-keyscan github.com >> ~/.ssh/known_hosts
```
# jenkins 部署项目梳理
* 安装Jenkins
* 初始化Jenkins
* 安装```publish over ssh```(发送项目到服务器)
* 全局配置 publish over ssh 插件（首页 -> 系统管理 -> 系统配置 -> Publish over SSH -> SSH Servers）
* 项目中配置（项目配置 -> 构建后操作 -> SSH Server -> Transfers）