# 1. 安装包
```go
  go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
```
# 2.生成go文件
```go
 // python3 -m grpc_tools.protoc --python_out=. --grpc_python_out=. -I . user.proto
 protoc --proto_path=src --go_out=out --go_opt=paths=source_relative foo.proto bar/baz.proto
```
# 3.服务端代码
```go
package main

import (
	"context"
	"net"

	"google.golang.org/grpc"

	"OldPackageTest/grpc_test/proto"
)

type Server struct{}

func (s *Server) SayHello(ctx context.Context, request *proto.HelloRequest) (*proto.HelloReply,
	error) {
	return &proto.HelloReply{
		Message: "hello " + request.Name,
	}, nil
}

func main() {
	g := grpc.NewServer()
	proto.RegisterGreeterServer(g, &Server{})
	lis, err := net.Listen("tcp", "0.0.0.0:8088")
	if err != nil {
		panic("failed to listen:" + err.Error())
	}
	err = g.Serve(lis)
	if err != nil {
		panic("failed to start grpc:" + err.Error())
	}
}

```
# 4.客户端代码
```go
package main

import (
	"context"
	"fmt"
	"google.golang.org/grpc"

	"OldPackageTest/grpc_test/proto"
)

func main() {
	//stream
	conn, err := grpc.Dial("127.0.0.1:8088", grpc.WithInsecure())
	if err != nil {
		panic(err)
	}
	defer conn.Close()

	c := proto.NewGreeterClient(conn)
	r, err := c.SayHello(context.Background(), &proto.HelloRequest{Name: "bobby"})
	if err != nil {
		panic(err)
	}
	fmt.Println(r.Message)
}

```
