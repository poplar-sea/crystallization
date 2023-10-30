# 1. docker在容器中管理数据主要方式
* 数据卷(Volumes);
* 挂载主机目录(Bind mounts);
* 从docker下载下来的叫镜像images;
* 使用```docker run``` 运行起来的镜像叫容器 ```container```;
## 1.1 挂载本地目录
* Docker容器启动时，如果要挂载宿主机上的一个目录，可以用-v参数指定。
* 假如要启动一个ubuntu容器，宿主机的/data1目录挂载到容器的/data2目录，可通过以下方式指定：
  ```docker run -it -v /data1:/data2 ubuntu /bin/bash```
* 在容器启动后，容器内会自动创建/data2的目录。
  * -v参数中，冒号":"前面的目录是宿主机目录，后面的目录是容器内目录。
  * 冒号”:”前后的路径必须是绝对路径，以下斜线“/”开头。
  * 宿主机目录如果不存在，则会自动生成。
  * 现在镜像就可以在宿主机和docker里互相共享文件了。
## 1.2 docker数据卷容器
* 定义：“其实就是一个正常的容器，专门用来提供数据卷供其它容器挂载的”。感觉像是由一个容器定义的一个数据挂载信息。其他的容器启动可以直接挂载数据卷容器中定义的挂载信息。
* 创建：
  ```docker
  # docker volume create edc-nginx-vol // 创建一个自定义容器卷
  # docker volume ls // 查看所有容器卷
  # docker volume inspect edc-nginx-vol // 查看指定容器卷详情信息
  # volumes：默认位于/var/lib/docker/volumes目录中。
  ```
* 使用指定卷的容器:
  ```docker
  docker run -d -it --name= edc-nginx-vol -v  edc-nginx-vol:/ ubuntu:18.04
  docker ps
  docker exec -it 80692ff2b813 /bin/bash
  ```
* 清除数据卷：
  ```docker
  # docker stop xxx// 暂停容器实例
  # docker rm xxx // 移除容器实例
  # docker volume rm xxx // 删除自定义数据卷
  ```