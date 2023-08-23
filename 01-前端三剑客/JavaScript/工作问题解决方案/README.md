# 1. js打印预览内容/文字被截断问题
* 给对应的行添加css属性
  ```css
    page-break-inside: avoid;
    page-break-before: avoid;
    page-break-after: avoid;
  ```
# 2.文隐藏滚动条
```css
 &::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }
```
# 3.好用的大屏自适应工具库
[autofit](https://github.com/995231030/autofit.js)

# 4.项目中如何区分环境和设置环境变量
[环境变量](https://juejin.cn/post/6939396963716562974)