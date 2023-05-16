# nginx服务
```shell
# 进入init.d目录
cd /etc/init.d
# 停止nginx服务
sudo nginx -s stop
# 进入nginx文件夹
cd /etc/nginx
# 修改nginx配置
sudo vim nginx.conf
```
# 安装
```bash
sudo aot-get install nginx
```
# 安装后的目录结构：
* 所有的配置文件都在/etc/nginx下，虚拟主机在/etc/nginx/sites-available
* 程序文件在/usr/sbin/nginx
* 日志放在了/var/log/nginx
* 并已经在/etc/init.d/下创建了启动脚本nginx
* 默认的虚拟主机的目录设置在了/var/www/html