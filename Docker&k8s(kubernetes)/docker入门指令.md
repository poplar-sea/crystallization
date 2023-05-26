# 1. 查看镜像信息
## 1.1 列出镜像
```docker
docker images
```
## 1.2 使用tag命令添加镜像标签
```docker
docker tag ubuntu:latest myUbuntu:latest
```
## 1.3 使用inspect命令查看详细信息
```docker
docker [image] inspect nginx
```
## 1.4 使用history命令查看镜像历史
```docker
docker history nginx
```
## 1.5 使用search命令搜索镜像包
```docker
docker search nginx
```
## 1.6 使用pull命令拉取镜像
```docker
docker pull nginx
```
## 1.7 使用run命令运行容器
```docker
docker run -d --name docker-nginx -p 8080:8080 nginx
```
## 1.8 使用exec命令进入容器
```docker
docker exec -it docker-nginx bash
```
## 1.9 查看容器
```docker
docker container ls
```
## 2.0 使用网络
```js
sudo docker network ls // 查看宿主机中创建的网络
sudo docker network create app // 创建一个新的网络
sudo docker network inspect app // 查看网络的详细信息
sudo docker network rm app // 删除网络
sudo docker run -it --name test --net=app imagename // 启动镜像时指定--net参数
sudo docker network connect app test // 将运行中的容器加入网络 app 需要加入的网络名 test 需要加入到网络的容器名
```
