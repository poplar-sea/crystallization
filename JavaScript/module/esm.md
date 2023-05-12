# esm预设严格模式
* esm的代码块会自动变成```use strict```(严格模式)
# 作用域独立
* 当你在```script```标签上面添加```type="module"```就启动了esm，在它下面的```script```标签不会获得在esm中声明的变量。