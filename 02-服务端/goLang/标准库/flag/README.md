* flag用于解析命令行选项;
* flag.Parse从os.Args[1:]中解析选项。因为os.Args[0]为可执行程序路径，会被剔除
* flag.Parse方法必须在所有选项都定义之后调用，且flag.Parse调用之后不能再定义选项
* 选项格式
  ```bash
  # 1
  -flag 
  # 2
  -flag=x
  # 3
  -flag x
  # 第一种形式只支持布尔类型的选项，出现即为true，不出现为默认值
  # 第三种形式不支持布尔类型的选项
  ```
* 注意事项
  * 遇到第一个非选项参数（即不是以-和--开头的）或终止符--，解析停止

# 参考文档
[flag入门](https://darjun.github.io/2020/01/10/godailylib/flag/)