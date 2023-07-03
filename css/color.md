# 1. color-adjust
* 是否允许浏览器自己调节颜色以便有更好的阅读体验。
* 语法：
  ```css
  color-adjust: economy;
  color-adjust: exact;
  -webkit-print-color-adjust: exact;
  -moz-print-color-adjust: exact;
  ```
* economy
  * 默认值。economy英文直译意思是“经济”，“节省”。表现为，浏览器（或其他客户端）对于元素进行样式上的调整，调整的规则由浏览器自己决定，以免达到更好的输出效果。例如，当打印时，浏览器会选择省略所有背景图像，并调整文本颜色，以确保对比度对于白纸上的阅读是最佳的。
* exact
  *  exact则是“精确”，“准确”的意思。意思是告诉浏览器，我设置的这些颜色，背景啥的都是有必要的，精确匹配的，你不要自作聪明帮我做调整。