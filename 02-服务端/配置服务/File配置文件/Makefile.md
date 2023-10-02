[mikefile介绍](https://seisman.github.io/how-to-write-makefile/rules.html)
# 1.基础用法
```make
target ... : prerequisites ...
  recipe
  ...
  ...
```
* target: 可以是一个object file（目标文件），也可以是一个可执行文件，还可以是一个标签（label）。
* prerequisites: 生成该target所依赖的文件和/或target。
* recipe: 该target要执行的命令（任意的shell命令）。
* prerequisites中如果有一个以上的文件比target文件要新的话，recipe所定义的命令就会被执行。