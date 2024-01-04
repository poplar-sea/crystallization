1. ping 网络连通性检测
2. ip address show 显示网络接口信息
3. telnet 检查主机相应服务是否正常开启
  * ```telnet ip地址 port端口```
4. shutdown 关闭系统/重启xitong
  * shutdown -h 10     --- 多久关系系统
  * shutdown -h 0/now  --- 立刻关闭系统
  * shutdown -r 10     --- 多久重启系统
  * shutdown -r 0/now    --- 立刻重启系统
  * shutdown -c        --- 取消关闭或重启系统方案
  
5. halt poweroff 立刻关闭操作系统
6. reboot  立刻重启操作系统
7. pwd 显示目录结构信息
8. cd 切换路径信息
   * cd -     返回到上次所在路径
   * cd ~/ cd 返回到home目录
   * cd ..    返回到上一级目录
   * cd /     返回到根目录
   * cd .     返回到当前目录
9.  mkdir 创建目录
   * ```mkdir -p  目录信息``` 递归创建目录
   * ```mkdir 目录信息```     创建目录过程
10. touch 创建文件
11. ls 查看目录下的文件或目录属性信息
   * ```ls -a``` 显示所有文件或目录属性信息
   * ```ls -l``` 显示文件的详细信息
   * ```ls -d``` 只显示文件的目录信息，