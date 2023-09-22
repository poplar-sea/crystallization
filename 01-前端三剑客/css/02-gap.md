# 1.什么是gap
* ```gap``` 属性是用来设置网格行与列之间的间隙（gutters），该属性是 row-gap 和 column-gap 的简写形式
#2. 应用
1. flex布局：
   ```css
   #flexbox {
   display: flex;
   flex-wrap: wrap;
   width: 300px;
   gap: 20px 5px;
   }
   ```
2. grid布局：
   ```css
   #grid {
   display: grid;
   height: 200px;
   grid-template: repeat(3, 1fr) / repeat(3, 1fr);
   gap: 20px 5px;
   }
   ```
3. 多列布局：
   ```css
   .content-box {
   column-count: 3;
   gap: 40px;
   }
   ```
