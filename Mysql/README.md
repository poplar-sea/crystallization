# 1.常用操作指令
* 连接mysql: ```mysql -h host -u user -p // 接着输入你的密码```
* 查看数据库列表: ```show databases;```
* 使用数据库: ```USE test;```
* 查看当前数据库有哪些数据表:```show tables```;```select table_name from information_schema.tables where table_schema='数据库名'```
* 