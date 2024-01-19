# 1. 二进制部署Nginx实战
```bash
# 方式1：
# 配置epel仓库，如果已经配置，则可以跳过
wget -O /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo
# 安装Nginx
yum install -y nginx
# 方式2：
### 除了配置epel仓库，也可以配置nginx官方提供的仓库
vim /etc/yum.repos.d/nginx.repo
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
[nginx-mainline]
name=nginx mainline repo
baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
gpgcheck=1
enabled=0
gpgkey=https://nginx.org/keys/nginx_signing.key

# 安装
# 默认安装的是最新的稳定版本，如果需要可以安装指定版本
yum install nginx -y
# 或者
yum install -y nginx-1.16.1
# 如果想安装最新测试版本，可以把nginx-mainline的enabled设置为1，再执行安装nginx命令即可
```

# 2. 源代码部署Nginx实战
* Nginx Web安装时可以指定很多的模块 ,默认需要安装 Rewite与 gzip模块 ,就是需要系统有 PCRE和 zlib库 ,安装 PCRE支持 Rewite与功 能,安装zlib库支持 gzip功能
```bash
# 安装PCRE库
yum install -y pcre-devel zlib-devel
# 下载Nginx源码包
wget -c http://nginx.org/download/nginx-1.20.0.tar.gz
# 解压Nginx源码包
tar -xf nginx-1.20.0.tar.gz
# 进入解压目录，sed修改Nginx版本信息为JFWS/2.2
cd nginx-1.20.0
sed -i -e 's/1\.20\.0/2.2/' -e '/NGINX_VER/s/nginx/JFWS/' src/core/nginx.h # 在 src/core/nginx.h文件中将所有的 "1.20.0" 字符串替换为 "2.2"，在所有包含 "NGINX_VER" 的行中，将 "nginx" 替换为 "JFWS"
# 创建www用户和组，-s表示指定其Shell， -M表示不创建根目录
useradd -M -s /sbin/nologin www
# 预编译Nginx，添加常见参数和模块
# ./configure：这是大多数开源软件项目的通用配置脚本，用于根据用户指定的选项生成合适的Makefile文件。在Nginx中，它用来确定Nginx将如何被编译和构建，包括哪些模块会被包含以及安装路径等信息。
# --user=www：设置nginx worker进程运行时的用户为“www”。这意味着一旦Nginx安装并启动后，其主进程及其工作进程将以“www”用户的身份运行。
# --group=www：设置nginx worker进程运行时的组为“www”。同样，这控制了Nginx运行时所属的系统组。
# --prefix=/usr/local/nginx：定义Nginx的安装目录，所有可执行文件、配置文件、文档文件和库文件等都会按照这个路径结构进行安装。
# --with-http_stub_status_module：启用HTTP stub status模块。这个模块提供了一个简单的页面，可以显示Nginx服务器的基本状态信息，如当前连接数、处理请求总数等。
# --with-http_gzip_static_module：启用HTTP gzip static模块。该模块允许Nginx对静态内容（例如HTML、CSS、JavaScript文件）进行实时gzip压缩，从而减少网络传输的数据量，提高网页加载速度。
./configure --user=www --group=www --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_gzip_static_module 
# 执行make命令编译Nginx
make
# 执行make install命令安装Nginx
make install
#  如果以上步骤均没有报错，则至此nginx web 服务器安装完毕
```