# cookie
* HTTP Cookie（也叫 Web Cookie 或浏览器 Cookie）是服务器发送到用户浏览器并保存在本地的一小块数据
## 1.1作用
* 记录用户访问网站的行为
* 记录用户的登录状态
* 记录用户的浏览习惯
## 1.2分类
* 会话期Cookie
* 持久性Cookie
## 1.3特点
* 保存客户端的文本信息
* 浏览器每次都会发送
* 浏览器不主动删除，仅在浏览器关闭时，才会被浏览器删除
* 每个域名下最多存放20个Cookie
* 每个Cookie大小4KB
## 1.4作用域
* 默认情况下，Cookie在创建后只能被发送到创建它的服务器上
* 为了能够被其他服务器访问，必须将Cookie的scope属性设置为"all"
* 默认情况下，Cookie的scope属性设置为"path"，表示只能被创建它的路径下的服务器访问
* 默认情况下，Cookie的scope属性设置为"domain"，表示只能被创建它的域名下的服务器访问
## 1.5cookie的路径
* 默认情况下，Cookie的path属性设置为"/"，表示只能被创建它的路径下的服务器访问
* 为了能够被其他路径下的服务器访问，必须将Cookie的path属性设置为"/"
## 1.6cookie的过期时间
* 默认情况下，Cookie的过期时间为会话结束时
* 为了能够持久保存Cookie，需要设置Cookie的过期时间
## 1.7cookie的域名
* 默认情况下，Cookie的domain属性设置为"localhost"，表示只能被创建它的域名下的服务器访问
* 为了能够被其他域名下的服务器访问，必须将Cookie的domain属性设置为"localhost"
## 1.8cookie的httponly属性
* 默认情况下，Cookie的httponly属性设置为false，表示可以被JavaScript访问
* 为了防止XSS攻击，必须将Cookie的httponly属性设置为true
## 1.9cookie的secure属性
* 默认情况下，Cookie的secure属性设置为false，表示Cookie可以被任何服务器访问
* 为了防止Cookie被伪造，必须将Cookie的secure属性设置为true
## 1.10cookie的编码
* 默认情况下，Cookie的value值是经过URL编码的
* 为了防止URL编码被破解，必须将Cookie的value值设置为经过Base64编码的
## 1.11 创建cookie
* 创建Cookie
```java
Cookie cookie = new Cookie("name", "value");
```
* 设置Cookie的过期时间  
```java 
cookie.setMaxAge(60 * 60);
```
* 设置Cookie的路径  
```java
cookie.setPath("/");
```
* 设置Cookie的域名  
```java
cookie.setDomain("localhost");
```
* 设置Cookie的httponly属性  
```java 
cookie.setHttpOnly(true);
```
* 设置Cookie的secure属性  
```java 
cookie.setSecure(true);
```
* 设置Cookie的编码  
```java
cookie.setValue(Base64.getEncoder().encodeToString("value".getBytes()));
```
* 将Cookie发送给客户端  
```java 
response.addCookie(cookie);
```
## 1.12 读取cookie
* 读取Cookie
```java
Cookie[] cookies = request.getCookies();
```
* 解码Cookie的value值
```java 
String value = Base64.getDecoder().decodeToString(cookie.getValue());
```
## 1.13 删除cookie
* 删除Cookie
```java
response.addCookie(new Cookie("name", ""));
```
* 设置Cookie的过期时间为0
```java
cookie.setMaxAge(0);
```