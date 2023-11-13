[mikefile介绍](https://seisman.github.io/how-to-write-makefile/rules.html)

# 1. 介绍
* make是一个命令行工具，它用于根据Makefile文件执行构建任务。
# 2.基础用法
* Make在默认条件下只会执行第一个目标;
* 不想在make编译的时候打印正在执行的执行，可以在每条命令的前面加一个```@```;
* make通过 ```-C subdir```参数，会分别到各个子目录下去执行，解析各个子目录下的Makefile并运行，遍历完所有的子目录，make最后才会退出;
* 变量使用export声明为环境变量,可以传递到各个子目录中;

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
* 一个变量使用```override```修饰后，用户在命令行中重新赋值，不会对Makefile中的变量定义产生影响，无论用户在命令行中如何修改，make始终打印的是Makefile中定义的值;

# 3.变量
## 3.1 基础变量
```makefile
CC = gcc
hello:
  echo $(CC)
```
## 3.2 赋值
```makefile
# 1.直接赋值
CC = gcc

# 2.条件赋值(指一个变量如果没有被定义过，就直接给它赋值；如果之前被定义过，那么这条赋值语句就什么都不做)
CC ?= gcc

# 3.追加赋值(追加赋值是指一个变量，以前已经被赋值，现在想给它增加新的值)
OBJS = hello.o
OBJS += module.o
hello:
  echo $(CC)
```
## 3.3 特殊变量
```makefile
a = 1
b = 2
# 立即变量(立即变量使用 := 操作符进行赋值，在解析阶段就直接展开)
val_a := $(a)
# 延迟变量(迟变量则是使用 = 操作符进行赋值，在make解析Makefile阶段不会立即展开，而是等到实际使用这个变量时才展开，获得其真正的值)
val_b  = $(b)
a = 10
b = 20
test:
    echo $(val_a) # 1
    echo $(val_b) # 2
```
## 3.4 自动变量
```makefile
# $@：目标
# $^：所有目标依赖
# $<：目标依赖列表中的第一个依赖
# $?：所有目标依赖中被修改过的文件
# $%：当规则的目标是一个静态库文件时，$%代表静态库的一个成员名
# $+：类似$^，但是保留了依赖文件中重复出现的文件
# $*：在模式匹配和静态模式规则中，代表目标模式中%的部分。比如hello.c，当匹配模式为%.c时，$*表示hello
# $(@D)：表示目标文件的目录部分
# $(@F)：表示目标文件的文件名部分
# $(*D)：在模式匹配中，表示目标模式中%的目录部分
# $(*F)：在模式匹配中，表示目标模式中%的文件名部分
# -: ：告诉make在编译时忽略所有的错误
# @: ：告诉make在执行命令前不要显示命令
```

# 4. 条件判断
## 4.1 结构介绍
* 条件判断语句由三个关键字组成：```ifeq、else、endif```。
* ifeq后面的比较语句使用小括号抱起来;
* ifeq和小括号之间要用空格隔开;
* 小括号里的两个参数用逗号隔开;
* 当小括号里的条件满足时，make就会执行这个分支的命令;
* 否则执行else部分。endif表示一个条件语句的结束;
```makefile
mode = debug
hello: hello.c
ifeq ($(mode),debug)
    @echo "debug mode" 
    gcc -g -o hello hello.c
else
    @echo "release mode"
    gcc -o hello hello.c
endif
# make
# debug mode
# gcc -g -o hello hello.c
```
## 4.2 类型
* ```ifeq``` 关键字用来判断两个参数是够相等，相等时条件成立为true，不相等为false;
* ```ifneq``` 关键字\用来判断参数是否不相等。当比较的参数不相等时，值为true，否则为false;
* ```ifdef``` 关键字用来判断一个变量是否已经定义。如果变量的值非空（在Makefile中，没有定义的变量的值为空），值为true;
* ```ifndef``` 关键字和ifdef相反，如果一个变量没有定义，表达式为真
[makefile](https://www.zhaixue.cc/makefile/makefile-export.html)

# 5. 函数
## 5.1 介绍
* GNU make 提供了大量的函数用来处理文件名、变量、文本和命令
* 函数的使用和变量引用的展开方式相同： ```$(function arguments)```
## 5.2 使用格式注意：
* 函数主要分为两类：
  * make内嵌函数： GNU make内嵌的函数，直接引用;
  * 用户自定义函数：自定义的函数，要通过make的call函数来间接调用;
* 函数和参数列表之间要用```空格```隔开，多个参数之间使用```逗号```隔开;
* 如果在参数中引用了变量，变量的引用建议和函数引用使用统一格式：要么是一对小括号，要么是一对大括号;
```makefile
# make内嵌函数
SRC  = $(wildcard *.c) # 列出所有符号匹配模式的文件
# d定义函数
define func
    @echo "pram1 = $(0)"
    @echo "pram2 = $(1)"
endef
# 执行用户自定义函数
all:
    $(call func, hello zhaixue.cc)
```
## 5.3 make内嵌函数

```makefile
# 文本处理函数

# 1.subst实现字符串的替换
$(subst old,new,text) # 将字符串text中的old替换为new
# 2. patsubst 主要用来模式替换
OBJ  = $(patsubst %.c, %.o, $(SRC)) # 使用通配符 % 代表一个单词中的若干字符
# 3. foreach函数
$(foreach VAR,LIST,TEXT) # 把LIST中使用空格分割的单词依次取出并赋值给变量VAR，然后执行TEXT表达式。重复这个过程，直到遍历完LIST中的最后一个单词，函数的返回值是TEXT多次计算的结果
# 4. if 函数
$(if CONDITION,THEN-PART[,ELSE-PART]) # if 函数的第一个参数 CONDITION表示条件判断，展开后如果非空，则条件为真，执行 THEN-PART部分；否则，如果有ELSE-PART部分，则执行ELSE-PART部分

# 5. shell函数
current_path = $(shell pwd) # shell命令的运行结果即为shell函数的返回值

```

# 6. phony
* phony在Makefile中是"pseudo target"的缩写，意思为“伪目标”。
* 它并不代表一个真正的文件名，而是一个标签，用来指向一个规则中的命令。
* 伪目标的主要作用是避免在Makefile中定义的只执行命令的目标和工作目录下的实际文件出现名字冲突。
* 当在Makefile中定义了一个伪目标后，每次执行make该目标时，都会执行该目标所对应的命令，而不会去考虑该目标文件是否存在。
* 因此，伪目标常用于构建一些不会生成实际文件的规则，例如清理工作（clean）