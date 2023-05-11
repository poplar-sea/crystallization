# 权限操作
```shell
# 更改文件夹权限
sudo chown -R 当前用户 需要操作的文件夹路径
# eg:
sudo chown -R www-data: .
```
# 查看
```shell
# 查看程序运行状态
systemctl status nginx
# 启动程序
systemctl start nginx
# 重新启动应用
sudo systemctl reload nginx
```