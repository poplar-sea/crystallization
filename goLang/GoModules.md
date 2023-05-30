# 1. GOROOT 和 GOPATH
* GOROOT：```GOROOT```就是```Go```的安装目录，（类似于java的JDK）
* GOPATH：```GOPATH```是我们的工作空间,保存```go```项目代码和第三方依赖包
  * 保存编译后的二进制文件。
  * ```go get```和```go install```命令会下载```go```代码到```GOPATH/src```。
  * import包时的搜索路径
# 2. GOMOD
* Go Modules很像java的maven，将第三方的库放在本地的空间，但它不是自动的下载包的
* 开启和关闭命令：
  ```bash
  go env -w GO111MODULE=on 打开
  go env -w GO111MODULE=off 关闭
  ```
* GO111MODULE值：
  * auto
    * 当存在 go.mod 文件时或处于 GOPATH 外， 其行为均会等同于于 GO111MODULE=on。
    * 这意味着在 Go 1.13 及之后的版本你可以将所有的代码仓库均存储在 GOPATH 下。
    * 当处于 GOPATH 内且没有 go.mod 文件存在时其行为会等同于 GO111MODULE=off。
  * on
    * 即使项目在您的 GOPATH 中，GO111MODULE = on 仍将强制使用 Go 模块。需要 go.mod 正常工作
  * off
    * 强制 Go 表现出 GOPATH 方式，即使在 GOPATH 之外。
* 下载下来的第三方库在GOPATH/pkg/mod文件夹里面
