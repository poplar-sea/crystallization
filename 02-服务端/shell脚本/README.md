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
4. Shell脚本有两种运行方式
  * 第一种方式是利用```sh```命令，把Shell脚本文件名作为参数。这种执行方式要求Shell脚本文件具有```“可读”```的访问权限，然后输入```sh test.sh```即可执行。
  * 第二种执行方式是利用```chmod命令```设置Shell脚本文件，使Shell脚本具有```“可执行”```的访问权限，然后直接在命令提示符下输入Shell脚本文件名，例如```. /test.sh```