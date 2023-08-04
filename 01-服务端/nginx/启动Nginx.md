# 查看Nginx的安装路径
```shell
# 输入Linux命令
ps -ef | grep nginx
#master 后面的地址就是Nginx的安装目录
```
# Ubuntu操作nginx
```shell
# 开机自启动
systemctl enable nginx
# 查看程序运行状态
systemctl status nginx | service nginx status
# 启动程序
systemctl start nginx | service nginx start
# 停止程序
systemctl stop nginx | service nginx stop
# 退出程序
systemctl quit nginx | service nginx quit
# 重启程序
systemctl restart nginx | service nginx restart
# 重新加载nginx
systemctl reload nginx | service nginx reload
# 显示帮助命令
systemctl -h nginx | service nginx -h
```

# https://blog.csdn.net/baidu_38493460/article/details/129080758