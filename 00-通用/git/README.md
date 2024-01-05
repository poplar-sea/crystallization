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