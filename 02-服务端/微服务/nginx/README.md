# 1. 介绍
* Nginx是一个轻量级的高性能HTTP反向代理服务器，同时它也是一个通用类型的代理服务器，支持绝大部分协议，如TCP、UDP、SMTP、HTTPS等

# 2. 特点：
* 资源占用少、并发支持高
* 理论上单节点的Nginx同时支持```5W```并发连接，而实际生产环境中，硬件基础到位再结合简单调优后确实能达到该数值

# 3. Nginx环境搭建：

1. 创建nginx的目录并进入:
```sh
# mkdir /soft && mkdir /soft/nginx/  
# cd /soft/nginx/  
```

2. 下载安装nginx安装包：
```sh
  # 1. yum命令安装wget
  yum -y install wget 
  # 2. wget命令在线获取安装包
  wget https://nginx.org/download/nginx-1.21.6.tar.gz
  # 3. 解压Nginx的压缩包
  tar -xvzf nginx-1.21.6.tar.gz
  # 4. 下载并安装Nginx所需的依赖库和包
  yum install --downloadonly --downloaddir=/soft/nginx/ gcc-c++  
  yum install --downloadonly --downloaddir=/soft/nginx/ pcre pcre-devel4  
  yum install --downloadonly --downloaddir=/soft/nginx/ zlib zlib-devel  
  yum install --downloadonly --downloaddir=/soft/nginx/ openssl openssl-devel
  # 5. 一键下载依赖包
  yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel
  # 6.构建依赖包
  rpm -ivh --nodeps *.rpm  

  # 7. 进入解压后的nginx目录,执行nginx配置脚本(默认位于/usr/local/nginx/目录)
  cd nginx-1.21.6  
  ./configure --prefix=/soft/nginx/

  # 8.编译并安装Nginx
   make && make install
```
3. 启动Nginx
```sh
```