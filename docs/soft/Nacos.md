# Nacos 安装配置
Nacos (opens new window)是一款发现、配置和管理微服务的软件。

## 1.预备环境准备

Nacos 依赖 Java (opens new window)环境来运行。如果您是从代码开始构建并运行Nacos，还需要为此配置 Maven (opens new window)环境，请确保是在以下版本环境中安装使用:

1. 64 bit OS，支持 Linux/Unix/Mac/Windows，推荐选用 Linux/Unix/Mac。
2. 64 bit JDK 1.8+；下载 (opens new window)& 配置 (opens new window)。
3. Maven 3.2.x+；下载 (opens new window)& 配置 (opens new window)。

## 2.下载源码或者安装包

你可以通过源码和发行包两种方式来获取 Nacos。

#从 Github 上下载源码方式

```angular2html
git clone https://github.com/alibaba/nacos.git
cd nacos/
mvn -Prelease-nacos clean install -U  
ls -al distribution/target/

// change the $version to your actual path
cd distribution/target/nacos-server-$version/nacos/bin
```

### 下载编译后压缩包方式

您可以从 最新稳定版本 (opens new window)下载 nacos-server-$version.zip 包。

```angular2html
unzip nacos-server-$version.zip 或者 tar -xvf nacos-server-$version.tar.gz
cd nacos/bin
```

## 3.启动服务器

### Linux/Unix/Mac

启动命令(standalone代表着单机模式运行，非集群模式):

`sh startup.sh -m standalone`

### Windows

启动命令：

`cmd startup.cmd`

或者双击startup.cmd运行文件。

## 4.服务注册&发现和配置管理

### 服务注册

```angular2html
curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance?serviceName=nacos.naming.serviceName&ip=20.18.7.10&port=8080'

```

### 服务发现

```
curl -X GET 'http://127.0.0.1:8848/nacos/v1/ns/instances?serviceName=nacos.naming.serviceName'
```

### 发布配置

```
curl -X POST "http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=nacos.cfg.dataId&group=test&content=HelloWorld"

```

### 获取配置

```
curl -X GET "http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=nacos.cfg.dataId&group=test"

```

## 5.关闭服务器

### Linux/Unix/Mac

`sh shutdown.sh`

### Windows

`cmd shutdown.cmd`

或者双击shutdown.cmd运行文件。

### nacos-install.sh

```angular2html
#!/usr/bin/env bash

cat << EOF

###################################################################################
# 安装 nacos 脚本
# 需要提前安装 jdk、maven
# @system: 适用于所有 linux 发行版本。
###################################################################################

EOF

command -v java > /dev/null 2>&1 || {
	printf "${RED}Require java but it's not installed.${RESET}\n";
	exit 1;
}
command -v mvn > /dev/null 2>&1 || {
	printf "${RED}Require mvn but it's not installed.${RESET}\n";
	exit 1;
}

if [[ $# -lt 1 ]] || [[ $# -lt 2 ]]; then
	echo "Usage: sh nacos-install.sh [version] [path]"
	printf "Example: sh nacos-install.sh 1.0.0 /opt/nacos\n"
fi

version=1.0.0
if [[ -n $1 ]]; then
	version=$1
fi

root=/opt/nacos
if [[ -n $2 ]]; then
	root=$2
fi

echo "Current execution: install nacos ${version} to ${root}"

echo -e "\n>>>>>>>>> download nacos"
mkdir -p ${root}
curl -o ${root}/nacos-server-${version}.zip https://github.com/alibaba/nacos/releases/download/${version}/nacos-server-${version}.zip

echo -e "\n>>>>>>>>> install nacos"
unzip ${root}/nacos-server-${version}.zip -d ${root}/nacos-server-${version}
mv ${root}/nacos-server-${version}/nacos/* ${root}/nacos-server-${version}
rm -rf ${root}/nacos-server-${version}/nacos

```








