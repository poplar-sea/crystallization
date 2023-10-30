# 1.介绍
* ```zap``` 是 ```uber``` 开源的一个高性能，结构化，分级记录的日志记录包。

# 2. 特性
* 高性能：zap 对日志输出进行了多项优化以提高它的性能
* 日志分级：有 Debug，Info，Warn，Error，DPanic，Panic，Fatal 等
* 日志记录结构化：日志内容记录是结构化的，比如 json 格式输出
* 自定义格式：用户可以自定义输出的日志格式
* 自定义公共字段：用户可以自定义公共字段，大家输出的日志内容就共同拥有了这些字段
* 调试：可以打印文件名、函数名、行号、日志时间等，便于调试程序
* 自定义调用栈级别：可以根据日志级别输出它的调用栈信息
* Namespace：日志命名空间。定义命名空间后，所有日志内容就在这个命名空间下。命名空间相当于一个文件夹
* 支持 hook 操作

# 3.安装
```ssh
go get -u go.uber.org/zap
```

# 4. 日志记录器
## 4.1 SugaredLogger 
* 在需要性能但不是很重要的情况下，使用 SugaredLogger 较合适。它比其它结构化日志包快 4-10 倍，包括 结构化日志和 printf 风格的 API
```go
logger, _ := zap.NewProduction()
defer logger.Sync() // zap底层有缓冲。在任何情况下执行 defer logger.Sync() 是一个很好的习惯
sugar := logger.Sugar()
sugar.Infow("failed to fetch URL",
 // 字段是松散类型，不是强类型
  "url", url,
  "attempt", 3,
  "backoff", time.Second,
)
sugar.Infof("Failed to fetch URL: %s", url)
```

## 4.2 Logger
* 当性能和类型安全很重要时，请使用 Logger。
* 它比 SugaredLogger 更快，分配的资源更少，但它只支持结构化日志和强类型字段。
```go
logger, _ := zap.NewProduction()
defer logger.Sync()
logger.Info("failed to fetch URL",
  // 字段是强类型，不是松散类型
  zap.String("url", url),
  zap.Int("attempt", 3),
  zap.Duration("backoff", time.Second),
)
```
# 4.3 logger 和 sugaredlogger 相互转换
```go
// 创建 logger
logger := zap.NewExample()
defer logger.Sync()

// 转换 SugaredLogger
sugar := logger.Sugar()

// 转换 logger
plain := sugar.Desugar()
```
# 5. 创建```logger``：
## 5.1 NewExample
* Example 一般用在测试代码中;
```go
package main

import (
	"go.uber.org/zap"
)

func main() {
	logger := zap.NewExample()
	logger.Debug("this is debug message")
	logger.Info("this is info message")
	logger.Info("this is info message with fileds",
		zap.Int("age", 37), 
        zap.String("agender", "man"),
    )
	logger.Warn("this is warn message")
	logger.Error("this is error message")
}
```
## 5.2 NewDevelopment
* Development 用在开发环境中;
```go
package main

import (
	"time"

	"go.uber.org/zap"
)

func main() {
	logger, _ := zap.NewDevelopment()
	defer logger.Sync()

	logger.Info("failed to fetch url",
		// 强类型字段
		zap.String("url", "http://example.com"),
		zap.Int("attempt", 3),
		zap.Duration("duration", time.Second),
	)

	logger.With(
		// 强类型字段
		zap.String("url", "http://development.com"),
		zap.Int("attempt", 4),
		zap.Duration("duration", time.Second*5),
	).Info("[With] failed to fetch url")
}
```
## 5.3 NewProduction
* Production 用在生成环境中;

```go
package main

import (
	"time"

	"go.uber.org/zap"
)

func main() {
	logger, _ := zap.NewProduction()
	defer logger.Sync()

	url := "http://zap.uber.io"
	sugar := logger.Sugar()
	sugar.Infow("failed to fetch URL",
		"url", url,
		"attempt", 3,
		"time", time.Second,
	)

	sugar.Infof("Failed to fetch URL: %s", url)

	// 或更简洁 Sugar() 使用
	// sugar := zap.NewProduction().Sugar()
	// defer sugar.Sync()
}
```

[zap使用详解](https://www.cnblogs.com/jiujuan/p/17304844.html)