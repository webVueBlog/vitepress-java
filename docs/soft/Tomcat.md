# Tomcat 安装

安装

安装步骤如下：

（1）下载并解压到本地

进入官网下载地址：https://tomcat.apache.org/download-80.cgi ，选择合适的版本下载。

我选择的是最新稳定版本 8.5.28：http://mirrors.tuna.tsinghua.edu.cn/apache/tomcat/tomcat-8/v8.5.28/bin/apache-tomcat-8.5.28.tar.gz

我个人喜欢存放在：/opt/tomcat

```angular2html
wget -O /opt/tomcat/apache-tomcat-8.5.28.tar.gz http://mirrors.tuna.tsinghua.edu.cn/apache/tomcat/tomcat-8/v8.5.28/bin/apache-tomcat-8.5.28.tar.gz
cd /opt/tomcat
tar zxvf apache-tomcat-8.5.28.tar.gz
```

## 启动

启动 tomcat 服务

```angular2html
cd /opt/tomcat/apache-tomcat-8.5.28/bin
./catalina.sh start
```

## 停止 tomcat 服务

```angular2html
cd /opt/tomcat/apache-tomcat-8.5.28/bin
./catalina.sh stop
```

## tomcat8-install.sh

```angular2html

#!/usr/bin/env bash

###################################################################################
# 控制台颜色
BLACK="\033[1;30m"
RED="\033[1;31m"
GREEN="\033[1;32m"
YELLOW="\033[1;33m"
BLUE="\033[1;34m"
PURPLE="\033[1;35m"
CYAN="\033[1;36m"
RESET="$(tput sgr0)"
###################################################################################

printf "${BLUE}"
cat << EOF

###################################################################################
# 安装 Tomcat 脚本
# @system: 适用于所有 linux 发行版本。
###################################################################################

EOF
printf "${RESET}"

printf "${GREEN}>>>>>>>> install tomcat begin.${RESET}\n"

if [[ $# -lt 1 ]] || [[ $# -lt 2 ]]; then
	printf "${PURPLE}[Hint]\n"
	printf "\t sh tomcat8-install.sh [version] [path]\n"
	printf "\t Example: sh tomcat8-install.sh 8.5.28 /opt/tomcat8\n"
	printf "${RESET}\n"
fi

version=8.5.28
if [[ -n $1 ]]; then
	version=$1
fi

path=/opt/tomcat
if [[ -n $2 ]]; then
	path=$2
fi

# install info
printf "${PURPLE}[Info]\n"
printf "\t version = ${version}\n"
printf "\t path = ${path}\n"
printf "${RESET}\n"

# download and decompression
mkdir -p ${path}
curl -o ${path}/apache-tomcat-${version}.tar.gz https://archive.apache.org/dist/tomcat/tomcat-8/v${version}/bin/apache-tomcat-${version}.tar.gz
tar zxf ${path}/apache-tomcat-${version}.tar.gz -C ${path}

printf "${GREEN}<<<<<<<< install tomcat end.${RESET}\n"

```


