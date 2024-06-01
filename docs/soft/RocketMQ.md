# RocketMQ 安装部署

## 环境要求

1. 推荐 64 位操作系统：Linux/Unix/Mac
2. 64bit JDK 1.8+
3. Maven 3.2.x
4. Git

## 下载解压

进入官方下载地址：https://rocketmq.apache.org/dowloading/releases/，选择合适版本

建议选择 binary 版本。

解压到本地：

```angular2html
> unzip rocketmq-all-4.2.0-source-release.zip
> cd rocketmq-all-4.2.0/

```

## 启动 Name Server

```angular2html
> nohup sh bin/mqnamesrv &
> tail -f ~/logs/rocketmqlogs/namesrv.log
The Name Server boot success...
```

## 启动 Broker

```angular2html
> nohup sh bin/mqbroker -n localhost:9876 -c conf/broker.conf &
> tail -f ~/logs/rocketmqlogs/broker.log
The broker[%s, 172.30.30.233:10911] boot success...
```

## 收发消息

执行收发消息操作之前，不许告诉客户端命名服务器的位置。在 RocketMQ 中有多种方法来实现这个目的。这里，我们使用最简单的方法——设置环境变量 NAMESRV_ADDR ：

```angular2html
> export NAMESRV_ADDR=localhost:9876
> sh bin/tools.sh org.apache.rocketmq.example.quickstart.Producer
SendResult [sendStatus=SEND_OK, msgId= ...

> sh bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer
ConsumeMessageThread_%d Receive New Messages: [MessageExt...
```

## 关闭服务器

```
> sh bin/mqshutdown broker
The mqbroker(36695) is running...
Send shutdown request to mqbroker(36695) OK

> sh bin/mqshutdown namesrv
The mqnamesrv(36664) is running...
Send shutdown request to mqnamesrv(36664) OK
```

## FAQ

### connect to <172.17.0.1:10909> failed

启动后，生产者客户端连接 RocketMQ 时报错：

```angular2html
org.apache.rocketmq.remoting.exception.RemotingConnectException: connect to <172.17.0.1:10909> failed
    at org.apache.rocketmq.remoting.netty.NettyRemotingClient.invokeSync(NettyRemotingClient.java:357)
    at org.apache.rocketmq.client.impl.MQClientAPIImpl.sendMessageSync(MQClientAPIImpl.java:343)
    at org.apache.rocketmq.client.impl.MQClientAPIImpl.sendMessage(MQClientAPIImpl.java:327)
    at org.apache.rocketmq.client.impl.MQClientAPIImpl.sendMessage(MQClientAPIImpl.java:290)
    at org.apache.rocketmq.client.impl.producer.DefaultMQProducerImpl.sendKernelImpl(DefaultMQProducerImpl.java:688)
    at org.apache.rocketmq.client.impl.producer.DefaultMQProducerImpl.sendSelectImpl(DefaultMQProducerImpl.java:901)
    at org.apache.rocketmq.client.impl.producer.DefaultMQProducerImpl.send(DefaultMQProducerImpl.java:878)
    at org.apache.rocketmq.client.impl.producer.DefaultMQProducerImpl.send(DefaultMQProducerImpl.java:873)
    at org.apache.rocketmq.client.producer.DefaultMQProducer.send(DefaultMQProducer.java:369)
    at com.emrubik.uc.mdm.sync.utils.MdmInit.sendMessage(MdmInit.java:62)
    at com.emrubik.uc.mdm.sync.utils.MdmInit.main(MdmInit.java:2149)
```

原因：RocketMQ 部署在虚拟机上，内网 ip 为 10.10.30.63，该虚拟机一个 docker0 网卡，ip 为 172.17.0.1。RocketMQ broker 启动时默认使用了 docker0 网卡，生产者客户端无法连接 172.17.0.1，造成以上问题。

解决方案

（1）干掉 docker0 网卡或修改网卡名称

（2）停掉 broker，修改 broker 配置文件，重启 broker。

修改 conf/broker.conf，增加两行来指定启动 broker 的 IP：

```angular2html
namesrvAddr = 10.10.30.63:9876
brokerIP1 = 10.10.30.63
```

启动时需要指定配置文件

```angular2html
nohup sh bin/mqbroker -n localhost:9876 -c conf/broker.conf &
```

## rocketmq-install.sh

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
# 安装 rocketmq 脚本
# @system: 适用于所有 linux 发行版本。
###################################################################################

EOF
printf "${RESET}"

printf "${GREEN}>>>>>>>> install tomcat begin.${RESET}\n"

if [[ $# -lt 1 ]] || [[ $# -lt 2 ]]; then
	printf "${PURPLE}[Hint]\n"
	printf "\t sh rocketmq-install.sh [version] [path]\n"
	printf "\t Example: sh rocketmq-install.sh 4.5.0 /opt/rocketmq\n"
	printf "${RESET}\n"
fi

version=4.5.0
if [[ -n $1 ]]; then
	version=$1
fi

path=/opt/rocketmq
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
curl -o ${path}/rocketmq-all-${version}-bin-release.zip http://mirrors.tuna.tsinghua.edu.cn/apache/rocketmq/${version}/rocketmq-all-${version}-bin-release.zip
unzip -o ${path}/rocketmq-all-${version}-bin-release.zip -d ${path}/rocketmq-all-${version}/
mv ${path}/rocketmq-all-${version}/rocketmq-all-${version}-bin-release/* ${path}/rocketmq-all-${version}
rm -rf ${path}/rocketmq-all-${version}/rocketmq-all-${version}-bin-release

printf "${GREEN}<<<<<<<< install rocketmq end.${RESET}\n"

```
