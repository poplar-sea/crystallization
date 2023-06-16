# 1.os(os包提供了操作系统函数的不依赖平台的接口。)
## 1.1 Getenv
```go
func Getenv(key string) string
```
* ```Getenv```检索并返回名为```key```的环境变量的值。如果不存在该环境变量会返回空字符串。
# 2.flag(flag包实现了命令行参数的解析。)
## 2.1 StringVar
```go
func StringVar(p *string, name string, value string, usage string)
```
* StringVar用指定的名称、默认值、使用信息注册一个string类型flag，并将flag的值保存到p指向的变量。
## 2.2 Parse
```go
func Parse()
```
* 从os.Args[1:]中解析注册的flag。必须在所有flag都注册好而未访问其值时执行。未注册却使用flag -help时，会返回ErrHelp。