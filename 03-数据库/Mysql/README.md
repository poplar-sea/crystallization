# 1.常用操作指令
* 连接mysql: ```mysql -h host -P port -u user -p password // 接着输入你的密码```
* 查看数据库列表: ```show databases;```
* 使用数据库: ```USE test;```
* 查看当前数据库有哪些数据表:```show tables```;```select table_name from information_schema.tables where table_schema='数据库名'```
* 
[MySQL教程](https://github.com/jaywcjlove/mysql-tutorial/tree/master)
[我的数据库](2.tcp.cpolar.cn:12268)
 mysql -h 2.tcp.cpolar.cn -P 12268 -u root -p 