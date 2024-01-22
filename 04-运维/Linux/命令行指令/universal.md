# 1. wget
* ```wget``` 是一个命令行工具，主要用于从网络上下载文件。
```bash
wget -O /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo
# O /etc/yum.repos.d/epel.repo: 这个参数指定wget将要下载的文件保存到指定的位置
# http://mirrors.aliyun.com/repo/epel-7.repo: 这是需要wget下载的目标URL地址
```