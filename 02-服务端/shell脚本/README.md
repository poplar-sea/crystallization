1. 输出PATH路径
```sh
echo $PATH
```
2. 远程连接
```sh
ssh -p 13144 adminpc@2.tcp.cpolar.cn 
```
3. 上传文件到远程
```sh
scp -r minikube-linux-amd64 adminpc@2.tcp.cpolar.cn:13144/home/adminpc
```