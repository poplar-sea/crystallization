# 1. 安装包
```python
  pip3 install grpcio -i https://pypi.douban.com/simple
  pip3 install grpcio-tools -i https://pypi.douban.com/simple
```
# 2.生成Python文件
```python
 python3 -m grpc_tools.protoc --python_out=. --grpc_python_out=. -I . user.proto
```
# 3.服务端代码
```python
from concurrent import futures
import grpc
from grpc_hello.proto import helloworld_pb2
from grpc_hello.proto import helloworld_pb2_grpc
// 创建服务
class Greeter(helloworld_pb2_grpc.GreeterServicer):

    def SayHello(self, request, context):
        helloworld = helloworld_pb2.HelloReply()
        helloworld.message = "你好呀, " +  request.name
        return helloworld
        # return helloworld_pb2.HelloReply(message='Hello, %s!' % request.name)


def serve():
    // 1.创建实例
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    // 2.注册服务
    helloworld_pb2_grpc.add_GreeterServicer_to_server(Greeter(), server)
    // 3.监听端口
    server.add_insecure_port('[::]:50051')
    // 4.开启服务
    server.start()
    // 5.保持主程序运行
    server.wait_for_termination()


if __name__ == '__main__':
    logging.basicConfig()
    serve()
```
# 4.客户端代码
```python
import grpc
from grpc_hello.proto import helloworld_pb2, helloworld_pb2_grpc
if __name__ == "__main__":
    # 基本思想是with所求值的对象必须有一个enter()方法，一个exit()方法。
    # 紧跟with后面的语句被求值后，返回对象的enter()方法被调用，这个方法的返回值将被赋值给as后面的变量。
    # 当with后面的代码块全部被执行完之后，将调用前面返回对象的exit()方法
    # 1.远程连接服务端
    with grpc.insecure_channel("localhost:50051") as channel:
        # 2.注册服务
        stub = helloworld_pb2_grpc.GreeterStub(channel)
        # 3.创建请求
        hello_request = helloworld_pb2.HelloRequest()
        # 4.请求赋值
        hello_request.name = "bobby"
        # 5.发送请求
        rsp: helloworld_pb2.HelloReply = stub.SayHello(hello_request)
        print(rsp.message)
```
# 5.proto文件
```proto
syntax = "proto3";
option go_package = ".;proto";
service Greeter {
    rpc SayHello (HelloRequest) returns (HelloReply);
}

message HelloRequest {
    string name = 1;
}

message HelloReply {
    string message = 1;
}
```
