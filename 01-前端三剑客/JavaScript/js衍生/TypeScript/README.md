# 1. 在线编辑器
[ts](https://www.typescriptlang.org/zh/play?#code/DYUwLgBAhgXBDOYBOBLAdgcwgXggcijwCgBjAezXjNADpgyMAKKASiIgiA)

# 2.tsc 编译器
```sh
# 1.安装
npm install -g typescript

# 2.查看帮助
tsc -h
tsc --all

# 3.编译脚本
tsc app.ts # 单个文件
tsc file1.ts file2.ts file3.ts # 多个文件
tsc file1.ts file2.ts --outFile app.js #多个 TypeScript 脚本编译成一个 JavaScript 文件
tsc app.ts --outDir dist #指定保存到其他目录
tsc --target es2015 app.ts #指定编译后的 JavaScript 版本
tsc --noEmitOnError app.ts #一旦报错就停止编译，不生成编译产物
tsc --noEmit app.ts #只检查类型是否正确，不生成 JavaScript 文件
```
# 3.ts教程
[教程](https://wangdoc.com/typescript/intro)