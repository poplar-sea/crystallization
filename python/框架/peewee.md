# 1. 介绍
## 1.1 概念
* ```Peewee``` 是一个简单而小型的 ```Python ORM``` 工具。 它支持 ```SQLite```，```MySQL``` 和 ```PostgreSQL```。
* ORM框架：为了解决面型对象与关系数据库存在的互不匹配的现象的框架。
## 1.2 补充:什么是ORM
* 对象关系映射（Object Relational Mapping，简称ORM）模式是一种为了解决面向对象与关系数据库存在的互不匹配的现象的技术。
* ORM框架是连接数据库的桥梁，只要提供了持久化类与表的映射关系，ORM框架在运行时就能参照映射文件的信息，把对象持久化到数据库中。
## 1.3 Peewee 映射
* Model映射到数据库表，Field映射到表列，instance映射到表行。
* Peewee 对于 MySQL 使用MySQLDatabase，对于 PostgreSQL 使用PostgresqlDatabase，对于 SQLite 使用SqliteDatabase。
## 1.4 字段类型
|字段类型	|SQLite	|PostgreSQL	|MySQL|
|  ----  | ----  | ----  | ----  |
| CharField|	varchar |varchar | varchar|
| TextField	| text | text	| longtext |
| DateTimeField	| datetime | timestamp | longtext |
| IntegerField	| integer	| integer	| integer |
| BooleanField	| smallint	| bool	| bool|
| FloatField	| real	| real	| real|
| DoubleField	| real	| double	| double|
| BigIntegerField	| integer	| bigint	| bigint|
| DecimalField	| decimal	| numeric	| numeric|
| PrimaryKeyField	| integer	| serial	| integer|
| ForeignKeyField	| integer	| integer	| integer|
| DateField	| date	| date	| date|
| TimeField	| time	| time	| time|
# 2. 安装
```python
 pip3 install peewee
 pip3 install pymysql
```
# 3. 使用
## 3.1 连接数据库
```python
# 如果db不存在，会自动创建
db = MySQLDatabase("guest", host="127.0.0.1", port=3306, user="root", passwd="123456")
# guest -> 数据库名称
db.connect() # 连接数据库
# get_conn()不止是获取数据库连接：如果没有连接存在，新建一个。
# connect()函数建立的并不是一个连接
```
## 3.2 创建表
```python
from peewee import *
import datetime
# 连接数据库
db = MySQLDatabase("guest", host="127.0.0.1", port=3306, user="root", passwd="123456")
db.connect()
# 定义表
class BaseModel(Model):
    class Meta:
        database = db
class User(BaseModel):
    # 定义列
    username = CharField(unique=True)
class Tweet(BaseModel):
   # 定义列
    user = ForeignKeyField(User, related_name='tweets')
    message = TextField()
    created_date = DateTimeField(default=datetime.datetime.now)
    is_published = BooleanField(default=True)
if __name__ == "__main__":
    # 方法1: 创建表
    User.create_table()  # 创建User表
    Tweet.create_table()  # 创建Tweet表
    # 方法2: 创建表
    # db.create_tables([User, UserAuth]) 有其他的model往列表加即可
```
## 3.3 CRUD
### 3.3.1 插入数据
```python
user = User.create(username='tom')
Tweet.create(user=user, message="这是一段文字")
# 插入一条数据
p = User(name='liuchungui')
p.save()
```
### 3.3.2 查询数据
```python
 t = Tweet.get(message="这是一段文字")
    print(t.user_id)
    print(t.created_date)
    print(t.is_published)
```
### 3.3.3 更新数据
```python
# update info
rep = User.select().where(User.username == 'phyger2').get()

# modify status
rep.username=False
# don't forget save
rep.save()
```
### 3.3.4 删除数据
```python
res = User.select().where(User.username == 'phyger1').get()
res.delete_instance()
res.save()
```