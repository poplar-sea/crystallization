* encodeURI() 和 encodeURIComponent() 都是JavaScript中的编码函数，用于将非安全的URL字符转换为它们对应的百分号编码形式。
* 区别：
  * encodeURI()：
    * 作用：对整个URI（Uniform Resource Identifier）进行编码，保留了作为合法URI组成部分的一些特殊字符，如冒号、斜线、问号和井字号等。
    * 不会编码的字符：```: / ? # [ ] @ ! $ & ' ( ) * + , ; = ```这些字符在URI中具有特殊意义，因此不会被编码。
  * encodeURIComponent()：
    * 作用：对URI组件（例如查询字符串参数值）进行编码，比encodeURI()更严格，几乎会对所有非字母数字字符进行编码。
    * 编码的字符更多：除了上述encodeURI()不编码的字符之外，它还会对```! * ' ( )```这些字符都进行编码。