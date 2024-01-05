# 查看远程仓库
```shell
git remote -v
```
# 删除本地分支
```shell
git branch -D 分支名
```

# git初始化项目
```shell
git init
```

# 查看未合并提交的命令
* 它会列出所有在本地分支上存在，但在远程跟踪分支上不存在的提交
* 这些提交就是所谓的“未合并”提交，表示在本地分支上进行了修改和提交，但还没有推送到远程分支
```shell
git cherry -v
```
# 回滚代码
* 创建一个新的提交，这个提交会撤销指定的提交所做的更改
```shell
git revert
```
* 这个命令可以用来重置你的代码库到指定的提交
```shell
git reset --hard 版本号 
# --soft 重置到add之后，commit之前 代码在本地不会改变。
# --mixed 重置到add之前 代码在本地不会改变。
# --hard 该命令表示回退代码到某个版本下，代码在本地会改变到指定版本下，谨慎操作 代码在本地会改变
```
# git add . 撤销
* ```git reset HEAD ```
* ```git restore --staged .```
* ```git reset --mixed```
# git commit 撤销
* ```git reset --soft HEAD^```
* ```git reset --mixed HEAD^```
* ```git commit --amend``` 修改提交信息

