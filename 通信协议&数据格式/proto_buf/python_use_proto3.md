# 1. 安装包
```python
  pip3 install grpcio -i https://pypi.douban.com/simple
  pip3 install grpcio-tools -i https://pypi.douban.com/simple
```
# 2.生成Python文件
```python
 python3 -m grpc_tools.protoc --python_out=. --grpc_python_out=. -I . user.proto
```