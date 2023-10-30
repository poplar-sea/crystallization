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

### upstream 负载均衡
* 默认情况下使用轮询方式，逐一转发，这种方式适用于无状态请求
##### Weight（权重）
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
### rewrite
* rewrite 是实现URL重写的关键指令，根据regex（正则表达式）部分内容，重定向到replacement，结尾是flag标记
* ```rewrite <regex> <replacement> [flag];```
  *  关键字：其中关键字rewrite不能改变
     *  rewrite参数的标签段位置：server，location，if
  *  正则：perl兼容正则表达式语句进行规则匹配
  *  代替内容： 将正则匹配的内容替换成replacement
  *  flag标记：rewrite支持的flag标记
     *  last：本条规则匹配完成后，继续向下匹配新的locationURL规则
     *  break：本条规则匹配完成即终止，不在匹配后面的任何规则
     *  redirect：返回302临时重定向，浏览器地址会显示跳转后的URL地址
     *  permanent：返回301永久重定向。浏览器地址会显示跳转后的URL地址
* 实例：
  * ``` rewrite ^/([0-9]+).html  /index.jsp?pageNum=$1 break;```


