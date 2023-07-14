```go
package main

import (
	"fmt"
	"github.com/spf13/viper"
)
type MySQLConfig struct {
	User     string `yaml:"user"`
	Password string `yaml:"password"`
	Host     string `yaml:"host"`
	Port     int    `yaml:"port"`
	DbName   string `yaml:"dbname"`
}
type RedisConfig struct {
	Host string `yaml:"host"`
	Port int    `yaml:"port"`
	Auth string `yaml:"auth"`
	Wpc  string `yaml:"wpc"`
}
type NginxProxyConfig struct {
	Counter int `yaml:"counter"`
	NginxProxy NginxProxyConfig `yaml:"nginx_proxy" mapstructure:"nginx_proxy"`
}
type ServiceYaml struct {
	MySQL      MySQLConfig      `yaml:"mysql"`
	Redis      RedisConfig      `yaml:"redis"`
	NginxProxy NginxProxyConfig `yaml:"nginx"`
}

var y ServiceYaml

func main() {
	v := viper.New()
	v.SetConfigName("config") // name of config file (without extension)
	v.SetConfigType("yaml")
	v.AddConfigPath(".")
	if err := v.ReadInConfig(); err != nil {
		if _, ok := err.(viper.ConfigFileNotFoundError); ok {
			// Config file not found; ignore error if desired
			fmt.Print("Config file not found; ignore error if desired\n")
		} else {
			// Config file was found but another error was produced
			fmt.Print("Config file was found but another error was produced\n")
		}
	}
	if err := v.Unmarshal(&y); err != nil {
		fmt.Println(err)
	}
	fmt.Printf("MySQL host : %s, port : %d, user : %s, password : %s, db_name : %s\n",
		y.MySQL.Host, y.MySQL.Port, y.MySQL.User, y.MySQL.Password, y.MySQL.DbName)
	fmt.Printf("Redis host : %s, port %d, auth : %s, wpc: %s\n",
		y.Redis.Host, y.Redis.Port, y.Redis.Auth, y.Redis.Wpc)

	fmt.Printf("Vip Counter: %d, Vip List : \n", y.NginxProxy.Counter)
}
```
# 2.附：
```yaml
mysql:
  user: root
  password: 123456
  host: 192.198.1.1
  port: 3306
  dbname: mdb
redis:
  host: 192.168.1.1
  port: 1234
  auth: 123456
  wpc: wpc666
nginx_proxy:
  counter: 1
  nginx_list: [
    1.2.3.4,
    192.168.12.11
  ]
```
* 添加mapstructure，指定对应的字段(有些特殊情况，需要自定义kv的分隔符，有些时候，需要添加一些特殊标记来告诉解析器，这是一个合法的标识符)