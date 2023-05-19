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