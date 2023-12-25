# 1. 浏览器中的Content-Type（内容类型）
* 主要用于定义网络文件的类型和网页的编码，决定浏览器将以什么形式、什么编码读取这个文件
* 该属性的值是参考MIME（Multipurpose Internet Mail Extensions，多用途互联网邮件扩展）的类型来设定的
* 见的Content-Type类型有以下几种：
  * ```text/html```：这是最常见的网页内容类型，用于呈现HTML文档。
  * ```text/plain```：这是纯文本的内容类型，没有格式化信息。
  * ```text/css```：这是用于描述HTML文档样式的内容类型，例如CSS文件。
  * ```text/javascript```：这是用于呈现JavaScript代码的内容类型。
  * ```image/```：这是用于图像类型的内容类型，其中“”可以是jpeg、gif、png等具体的图像格式。
  * ```application/xml```：这是用于存储和传输数据的XML格式的内容类型。
  * ```application/json```：这是用于存储和传输数据的JSON格式的内容类型。
  * ```multipart/form-data```：这是用于发送二进制数据或者非ASCII数据（例如文件上传）的内容类型
  * ```application/x-www-form-urlencoded```: 是一种常见的内容类型，用于表示请求主体中的数据是 URL 编码的表单数据,这种类型通常用于 HTML 表单的提交，其中表单数据被编码为键值对的形式，并且以 & 分隔