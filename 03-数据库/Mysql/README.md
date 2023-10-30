# 1. 介绍
* ```MYSQL``` 是一个单进程多线程、支持多用户、基于客户机/服务器(Client/Server, C/S) 的关系数据库管理系统。
* 优点：
  * 体积小
  * 易于安装
  * 运行速度快
  * 功能齐全
  * 成本低廉
  * 开源



















# 1.常用操作指令
* 连接mysql: ```mysql -h host -P port -u user -p password // 接着输入你的密码```
* 查看数据库列表: ```show databases;```
* 使用数据库: ```USE test;```
* 查看当前数据库有哪些数据表:```show tables```;```select table_name from information_schema.tables where table_schema='数据库名'```
* 
[MySQL教程](https://github.com/jaywcjlove/mysql-tutorial/tree/master)
[我的数据库](2.tcp.cpolar.cn:12268)
[数据库查询](https://www.cnblogs.com/skaarl/p/13951169.html)
 mysql -h 2.tcp.cpolar.cn -P 12268 -u root -p 