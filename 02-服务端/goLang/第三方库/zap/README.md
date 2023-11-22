# 1. 使用 zapcore.NewCore 创建一个核心日志记录器
```go
package main  
  
import (  
 "os"  
 "go.uber.org/zap"  
 "go.uber.org/zap/zapcore"  
)  
  
func main() {  
 // 创建一个控制台编码器  
 encoder := zapcore.NewConsoleEncoder(zap.NewDevelopmentEncoderConfig())  
  
 // 创建一个文件同步器（这里使用标准输出作为示例）  
 syncer := zapcore.AddSync(os.Stdout)  
  
 // 创建一个核心日志记录器  
 core := zapcore.NewCore(encoder, syncer, zap.InfoLevel)  
  
 // 创建一个全局的日志记录器  
 logger := zap.New(core)  
  
 // 使用日志记录器记录一些日志条目  
 logger.Info("This is a log message")  
 logger.Error("This is an error message")  
}
```