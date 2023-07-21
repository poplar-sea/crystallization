# 1. 简介
* Protocol Buffers（简称ProtoBuf）是Google公司开发的一种与语言和平台无关的、可扩展的、序列化结构数据的方法，可用于（数据）通信协议、数据存储等
* 最新版本的proto3提供了对C++、Java、Python、Object-C、C#、Ruby、Go、PHP、Dart、Javascript等多种语言的支持
# 2. 序列化与反序列化基础
## 2.1 序列化与反序列化定义
* 序列化：将对象转换为字节序列的过程称为对象的序列化；
* 反序列化：将字节序列恢复为对象的过程称为对象的反序列化；
## 2.2 什么情况下用到序列化
* 当你想要把内存中的对象状态保存到一个文件中或者数据库中的时候；
* 当你想要用套接字在网络上传送对象的时候；
## 2.3 实现序列化的协议
* 主流序列化协议：json、xml、ProtoBuf。
# 3. ProtoBuf的优缺点及适用场景
## 3.1 ProtoBuf优点
* 语言无关、平台无关。即 ProtoBuf 支持 C++、Java、Python 等多种语言，支持多个平台。
* 高效。 序列化后体积相比json和XML很小，而且序列化反序列化速度很快。压缩比高 、解压缩速度更快。
* 扩展性、兼容性好。你可以更新数据结构，而不影响和破坏原有的旧程序
## 3.2 ProtoBuf缺点
* 二进制格式导致可读性差。 为了提高性能，ProtoBuf采用了二进制格式进行序列化反序列化。没有自描述，这直接导致了可读性差。
## 3.3 ProtoBuf适用场景
* ProtoBuf通常应用于在网络通信和通用数据交换等应用场景中。包括：
  * 跨平台的RPC数据传输；
  * 相比json的解析要更快、数据量更小，而且数据结构明朗的数据传输或存储。
* 在一个需要大量的数据传输的场景中，如果数据量很大，那么选择ProtoBuf可以明显的减少数据量，减少网络IO，从而减少网络传输所消耗的时间 。
# 4. 样例
```proto
syntax = "proto3"; // 表明使用protobuf的编译器版本为v3，目前最新的版本为v4
import "google/protobuf/empty.proto"; //  导入了一个外部proto文件中的定义，类似于C++中的 include。
// 允许您在.proto文件中定义额外的配置选项。这些选项可以在编译时用来设置代码生成器的行为，例如为特定字段启用或禁用特定功能。
option go_package = ".;proto";
// 这个service下有多个服务:GetUserList, 它的请求由***Request结构体定义,回复由***Response定义。
service User {
    rpc GetUserByMobile(MobileRequest) returns (UserInfoResponse); //通过mobile查询用户
}

message MobileRequest {
    required string password = 1; password，数据类型为string的required字段，字段的标识号为1 
 // 字段修饰符 标量类型 字段名      标识号(用来在消息的二进制格式中识别各个字段)
    bool success = 2;
    uint32 pn = 3;
    int32 id = 4;
    uint64 birthDay = 5;
}


message UserInfoResponse {
    int32 id = 1;
    string passWord = 2;
    string mobile = 3;
    string nickName = 4;
    uint64 birthDay = 5;
    string gender = 6;
    int32 role = 7;
}
// protobuf一共有三个字段修饰符：  
//   - required：该值是必须要设置的；  
//   - optional ：该字段可以有0个或1个值（不超过1个）；  
//   - repeated：该字段可以重复任意多次（包括0次），类似于C++中的list； 
message UserListResonse {
    int32 total = 1;
    repeated UserInfoResponse data = 2;
}
```
