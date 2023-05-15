# Ubuntu文件目录详解
## 一级目录
* /bin：包含普通用户和系统管理员可以共享的各种通用程序，如bash、dd、gzip、grep、mv、mkdir等常用的基本命令。
* /boot：包含系统引导程序GRUB及其配置文件、linux内核文件vmlinuz和磁盘内存映象文件initrd.img等重要引导文件。
* /dev：包含系统支持的所有设备文件。具体来说，console表示控制台，lp0表示打印机，mem表示系统的物理内存，sda表示连接到主控制器的第一个磁盘，ttyXX表示串口设备。
* /etc：包含系统管理和维护方面的所有配置文件。
* /home：包含所有普通用户的主目录。

# 查看Nginx的安装路径
```shell
# 输入Linux命令
ps -ef | grep nginx
#master 后面的地址就是Nginx的安装目录
```

# https://blog.csdn.net/baidu_38493460/article/details/129080758