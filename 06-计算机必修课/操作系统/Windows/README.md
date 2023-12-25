
# 1. 常用windows命令
* ```msinfo32``` 查看系统信息;
* ```wmic cpu list brief``` 查看cpu信息;
* ```wmic bios list brief``` 查看bios信息;
* ```wmic os list brief``` 查看操作系统信息;
* ```wmic memorychip list brief``` 查看内存信息;
* ```wmic diskdrive list brief``` 查看磁盘信息;
* ```wmic baseboard get product,manufacturer,version``` 查看主板信息;
* ```wmic nic list brief``` 查看网卡信息;
* ```wmic csproduct get version``` 查看电脑型号;
* ```wmic qfe get description,installedon``` 查看系统补丁信息;
* ```wmic service list brief``` 查看服务信息;
* ```wmic service where startmode="auto" list brief``` 查看开机启动服务信息;
* ```wmic process list brief``` 查看进程信息;
* ```wmic startup list full``` 查看开机启动项信息;
* ```wmic useraccount list full``` 查看用户信息;