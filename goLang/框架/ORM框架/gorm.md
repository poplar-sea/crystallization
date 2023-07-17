# 1. 官方文档
* [gorm](https://gorm.io/zh_CN/docs/index.html)
# 2.使用
## 2.1 连接数据库
```go
import (
  "gorm.io/driver/mysql"
  "gorm.io/gorm"
)

func main() {
  // 参考 https://github.com/go-sql-driver/mysql#dsn-data-source-name 获取详情
  dsn := "user:pass@tcp(127.0.0.1:3306)/dbname?charset=utf8mb4&parseTime=True&loc=Local"
  db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
  // 高级驱动
  db, err := gorm.Open(mysql.New(mysql.Config{
  DSN: "gorm:gorm@tcp(127.0.0.1:3306)/gorm?charset=utf8&parseTime=True&loc=Local", // DSN data source name
  DefaultStringSize: 256, // string 类型字段的默认长度
  DisableDatetimePrecision: true, // 禁用 datetime 精度，MySQL 5.6 之前的数据库不支持
  DontSupportRenameIndex: true, // 重命名索引时采用删除并新建的方式，MySQL 5.7 之前的数据库和 MariaDB 不支持重命名索引
  DontSupportRenameColumn: true, // 用 `change` 重命名列，MySQL 8 之前的数据库和 MariaDB 不支持重命名列
  SkipInitializeWithVersion: false, // 根据当前 MySQL 版本自动配置
}), &gorm.Config{})
}
```
## 2.2 CRUD
### 2.2.1 创建
```go
user := User{Name: "Jinzhu", Age: 18, Birthday: time.Now()}
result := db.Create(&user) // 通过数据的指针来创建
```
### 2.2.2 查询
```go
var user User
var users []User

// works because destination struct is passed in
db.First(&user)
// SELECT * FROM `users` ORDER BY `users`.`id` LIMIT 1

// works because model is specified using `db.Model()`
result := map[string]interface{}{}
db.Model(&User{}).First(&result)
// SELECT * FROM `users` ORDER BY `users`.`id` LIMIT 1

// doesn't work
result := map[string]interface{}{}
db.Table("users").First(&result)

// works with Take
result := map[string]interface{}{}
db.Table("users").Take(&result)

// no primary key defined, results will be ordered by first field (i.e., `Code`)
type Language struct {
  Code string
  Name string
}
db.First(&Language{})
// SELECT * FROM `languages` ORDER BY `languages`.`code` LIMIT 1
```
### 2.2.3 更新
```go
// Update with conditions
db.Model(&User{}).Where("active = ?", true).Update("name", "hello")
// UPDATE users SET name='hello', updated_at='2013-11-17 21:34:10' WHERE active=true;
// User's ID is `111`:
db.Model(&user).Update("name", "hello")
// UPDATE users SET name='hello', updated_at='2013-11-17 21:34:10' WHERE id=111;
// Update with conditions and model value
db.Model(&user).Where("active = ?", true).Update("name", "hello")
// UPDATE users SET name='hello', updated_at='2013-11-17 21:34:10' WHERE id=111 AND active=true;
```
### 2.2.4 删除
```go
db.Delete(&User{}, 10)
// DELETE FROM users WHERE id = 10;
```
## 2.3 Model
* 模型是标准的 struct，由 Go 的基本数据类型、实现了 Scanner 和 Valuer 接口的自定义类型及其指针或别名组成
* GORM 使用 ID 作为主键，使用结构体名的小写(蛇形命名法)复数 作为表名，字段名的小写(蛇形命名法)作为列名，并使用 CreatedAt、UpdatedAt 字段追踪创建、更新时间
```go
// gorm.Model 的定义
type Model struct {
  ID        uint           `gorm:"primaryKey"`
  CreatedAt time.Time
  UpdatedAt time.Time
  DeletedAt gorm.DeletedAt `gorm:"index"`
}
// 嵌入结构体
type User struct {
  gorm.Model
  Name string
}
```
### 2.3.1 字段标签
* 声明 model 时，tag 是可选的，GORM 支持以下 tag： tag 名大小写不敏感，但建议使用 camelCase 风格

|标签名|	说明|
|----|----|
|column	|指定 db 列名|
|type	|列数据类型，推荐使用兼容性好的通用类型，例如：所有数据库都支持 bool、int、uint、float、string、time、bytes 并且可以和其他标签一起使用，例如：not null、size, autoIncrement… 像 varbinary(8) 这样指定数据库数据类型也是支持的。在使用指定数据库数据类型时，它需要是完整的数据库数据类型，如：MEDIUMINT UNSIGNED not NULL AUTO_INCREMENT|
|serializer	|指定将数据序列化或反序列化到数据库中的序列化器, 例如: serializer:json/gob/unixtime|
|size	|定义列数据类型的大小或长度，例如 size: 256|
|primaryKey	|将列定义为主键|
|unique	|将列定义为唯一键|
|default	|定义列的默认值|
|precision	|指定列的精度|
|scale	|指定列大小|
|not null	|指定列为 NOT NULL|
|autoIncrement	|指定列为自动增长|
|autoIncrementIncrement	|自动步长，控制连续记录之间的间隔|
|embedded	|嵌套字段|
|embeddedPrefix	|嵌入字段的列名前缀|
|autoCreateTime	|创建时追踪当前时间，对于 int 字段，它会追踪时间戳秒数，您可以使用 nano/milli 来追踪纳秒、毫秒时间戳，例如：autoCreateTime:nano|
|autoUpdateTime	|创建/更新时追踪当前时间，对于 int 字段，它会追踪时间戳秒数，您可以使用 nano/milli 来追踪纳秒、毫秒时间戳，例如：autoUpdateTime:milli|
|index	|根据参数创建索引，多个字段使用相同的名称则创建复合索引|
|uniqueIndex	|与 index 相同，但创建的是唯一索引|
|check	|创建检查约束，例如 check:age > 13|
|<-	|设置字段写入的权限， <-:create 只创建、<-:update 只更新、<-:false 无写入权限、<- 创建和更新权限|
|->	|设置字段读的权限，->:false 无读权限|
|-	|忽略该字段，- 表示无读写，-:migration 表示无迁移权限，-:all 表示无读写迁移权限|
|comment	|迁移时为字段添加注释|