# 1.块级格式化上下文
* 块格式化上下文（Block Formatting Context，BFC）是 Web 页面的可视 CSS 渲染的一部分，是块级盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域，来自MDN。简单来说就是，BFC就是页面上的一个隔离的独立渲染区域（Box），区域里面的子元素不会影响到外面的元素。外面的元素也不会影响到区域里面的子元素。
# 2.BFC的布局规则
* BFC布局中默认是内部的块元素会在垂直方向，一个接一个地放置。每个块元素独占一行。
* 属于同一个BFC的两个相邻块元素在垂直方向上的margin会发生重叠/合并，并且两个相邻块元素的之间的距离是由两个元素块中值最大的那个决定的。但水平方向的margin却不会
* BFC渲染区域不会与float浮动定义的元素区域重叠。
* 计算BFC区域的高度时，浮动元素的高度也计算在内。
* 区域里面的子元素不会影响到外面的元素。外面的元素也不会影响到区域里面的子元素。
# 3.如何创建BFC
* 浮动元素（float值不为 none）
* position的值不是static或者relative。
* display的值是inline-block、table-cell、flex、table-caption或者inline-flex
* overflow的值不是visible
# 4.BFC的作用
* 避免垂直方向margin合并；
* 避免垂直方向margin溢出；
* 自适应两栏布局
* 防止高度坍塌