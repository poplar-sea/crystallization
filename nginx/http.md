# server
## servername匹配规则
* 完整匹配
  ```javascript
  // 可以在同一servername中匹配多个域名
  server_name vod.mmban.com; www1.mmban.com;
  ```
* 通配符匹配
  ```javascript
  server_name *.mmban.com;
  ```
* 通配符结束匹配
  ```javascript
  server_name vod.*;
  ```
* 正则匹配
  ```javascript
  server_name ~^[0-9]+\.mmban\.com$;
  ```

# upstream 负载均衡
* 默认情况下使用轮询方式，逐一转发，这种方式适用于无状态请求
## Weight（权重）
指定轮询几率，weight和访问比率成正比，用于后端服务器性能不均的情况
``` nginx
upstream httpd {
  server 127.0.0.1:8050 weight = 10 down;
  server 127.0.0.1:8060 weight = 1;
  server 127.0.0.1:8050 weight = 1 backup;
}
# down: 表示当前的server暂时不参与负载
# weight：默认为1，weight越大，负载的权重就越大
# backup：其它所有的非backup机器down或者忙的时候，请求backup机器
```