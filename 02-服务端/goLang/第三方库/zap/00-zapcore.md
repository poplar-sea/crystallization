# 1. NewMultiWriteSyncer
* NewMultiWriteSyncer 函数用于创建一个 MultiWriteSyncer 实例。
* 它接受一个 io.Writer 实现作为参数，并返回一个实现了 zapcore.WriteSyncer 接口的对象。
* 这个对象可以将多个日志条目写入到同一个目标，并确保同步写入

# 2. NewTee
* 是一个用于创建日志管道（Log Pipe）的函数，可以将日志消息同时发送给多个输出;