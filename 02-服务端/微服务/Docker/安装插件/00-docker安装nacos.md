# 1. 查找关于nacos的镜像
```sh
docker search nacos
```
# 2. 拉取对应的镜像版本
```sh
docker pull nacos/nacos-server:2.0.3
```

# 3. 查看镜像
```sh
docker images
```
# 4. 启动nacos容器
```sh
 docker run --name docker-quick -e MODE=standalone -p 8848:8848 -p 9848:9848 -d nacos/nacos-server:2.0.3
#  2.X之后加了一个grpc的远程通信端口，所以在你的docker run 原命令之上再加一个 9848的端口进行映射就ok
```

# 5. 查看运行的容器
```sh
docker ps
```

# 6. 访问nacos
[url](https://poplarnacos.cpolar.top/nacos)
账号/密码: nacos/nacos