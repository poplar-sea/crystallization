# 1. 查看镜像信息
## 1.1 列出镜像
```docker
docker images
docker rmi -f imagename # 移除镜像
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
docker run -it -d --name docker-nginx -p 8080:8080 nginx

# -i表示交互式的，表示[cmd]是一个有用户输入的程序
# -t 产生一个终端。
# -d 后台运行容器，并返回容器ID，此时不会进入交互界面，如果想要进入交互界面请加-i和-t参数。
# --name 为容器指定一个名称，名字叫xxxxx；
# 容器能够运行，必须在容器内，有一个进程在前台运行。
```
## 1.8 使用exec命令进入容器
```docker
docker exec -it docker-nginx bash
```
## 1.9 查看容器
```docker
docker container ls
docker rm containername #移除容器
```
## 1.10 提交容器
```docker
docker commit 容器id 新镜像名
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
## dockerfile文件构建镜像
```bash
docker build [选项] <上下文路径/URL/->
# 当构建的时候，用户会指定构建镜像上下文的路径，docker build 命令得知这个路径后，会将路径下的所有内容打包，然后上传给 Docker 引擎。
# 这样 Docker 引擎收到这个上下文包后，展开就会获得构建镜像所需的一切文件。
```