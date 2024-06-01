#!/bin/bash

# 确保脚本抛出遇到的错误
set -e

# 打包生成静态文件
yarn docs:build
echo "打包成功"

# 进入打包好的文件夹
cd docs/.vitepress/dist

# 写入域名（如果需要）
# echo "1024bibi.com" > CNAME

# 初始化git仓库
git init

# 切换到dist分支，如果不存在则创建
if git show-ref --verify --quiet refs/heads/dist; then
  git checkout dist
else
  git checkout -b dist
fi

# 添加所有文件并提交
git add -A
git commit -m 'deploy'
echo "本地提交成功"

# 覆盖式地将本地仓库发布至github
# 格式为：git push -f git@github.com:'用户名'/'仓库名'.git dist:gh-pages
git remote add origin https://github.com/webVueBlog/vitepress-java.git
git push -f origin dist:dist

echo "dist目录上传成功"
