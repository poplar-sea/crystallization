# 1. From

- 功能为指定基础镜像，并且必须是第一条指令。
- 如果不以任何镜像为基础，那么写法为：FROM scratch；同时意味着接下来所写的指令将作为镜像的第一层开始
- 语法：

  ```docker
  FROM <image>
  FROM <image>:<tag>
  FROM <image>:<digest>
  三种写法，其中<tag>和<digest> 是可选项，如果没有选择，那么默认值为latest
  ```
# 2. ADD
* 一个复制命令，把文件复制到镜像中。
* 路径的填写可以是```容器内```的绝对路径，也可以是相对于工作目录的相对路径，推荐写成绝对路径
* 可以是一个本地文件或者是一个本地压缩文件，还可以是一个url，如果把写成一个url，那么ADD就类似于wget命令
* src为一个目录的时候，会自动把目录下的文件复制过去，目录本身不会复制
* 如果src为多个文件，dest一定要是一个目录
* 语法：
  ```docker
  ADD <src>... <dest>
  ADD ["<src>",... "<dest>"]
  ```
# 3.COPY
* COPY的只能是本地文件，其他用法与ADD一致
* 语法：
  ```docker
  COPY <src>... <dest>
  COPY ["<src>",... "<dest>"]
  ```
# 4.EXPOSE
* 功能为暴漏容器运行时的监听端口给外部，但是EXPOSE并不会使容器访问主机的端口
* 如果想使得容器与主机的端口有映射关系，必须在容器启动的时候加上 -P参数
* 语法：
    ```docker
  EXPOSE <port>/<tcp/udp>
  ```
# 5.ENV
* 功能为设置环境变量
* 语法：
  ```docker
  ENV <key> <value>
  ENV <key>=<value> ...
  ```
* 在docker中使用变量：
  ```docker
  $varname
  ${varname}
  ${varname:-default value}
  ${
  #第一种和第二种相同
  #第三种表示当变量不存在使用-号后面的值
  #第四种表示当变量存在时使用+号后面的值（当然不存在也是使用后面的值）varname:+default value}
  ```
# 6.RUN
* 功能为运行指定的命令
* 语法：
  ```docker
  RUN <command>
  RUN ["executable", "param1", "param2"]
  # 第一种后边直接跟shell命令
  # 在linux操作系统上默认 /bin/sh -c
  # 在windows操作系统上默认 cmd /S /C
  # 第二种是类似于函数调用。
  # 可将executable理解成为可执行文件，后面就是两个参数。
  ```
# 7.ENTRYPOINT
* 功能是：容器启动时运行得启动命令
* 语法：
  ```docker
  ENTRYPOINT ["executable", "param1", "param2"]  
  ENTRYPOINT command param1 param2
  # 第一种就是可执行文件加参数（EXEC调用,可在docker run启动时传递参数）
  # 第二种就是写shell (shell执行)
  ```
# 8.WORKDIR
* 工作空间
* 设置工作目录，对RUN,CMD,ENTRYPOINT,COPY,ADD生效。如果不存在则会创建，也可以设置多次。
* 语法:
  ```docker
  WORKDIR /path/to/workdir
  ```