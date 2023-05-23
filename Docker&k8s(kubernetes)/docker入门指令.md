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