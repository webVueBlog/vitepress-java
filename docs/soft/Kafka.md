# Kafka 安装部署

环境要求：

JDK8

ZooKeeper

## 下载解压

进入官方下载地址：http://kafka.apache.org/downloads，选择合适版本。

解压到本地：

```angular2html
> tar -xzf kafka_2.11-1.1.0.tgz
> cd kafka_2.11-1.1.0
```

现在您已经在您的机器上下载了最新版本的 Kafka。

## 启动服务器

由于 Kafka 依赖于 ZooKeeper，所以运行前需要先启动 ZooKeeper

```
> bin/zookeeper-server-start.sh config/zookeeper.properties
[2013-04-22 15:01:37,495] INFO Reading configuration from: config/zookeeper.properties (org.apache.zookeeper.server.quorum.QuorumPeerConfig)
...
```

然后，启动 Kafka

```angular2html

> bin/kafka-server-start.sh config/server.properties
[2013-04-22 15:01:47,028] INFO Verifying properties (kafka.utils.VerifiableProperties)
[2013-04-22 15:01:47,051] INFO Property socket.send.buffer.bytes is overridden to 1048576 (kafka.utils.VerifiableProperties)
...
```

## 停止服务器

执行所有操作后，可以使用以下命令停止服务器

```angular2html
$ bin/kafka-server-stop.sh config/server.properties
```

## 创建主题

创建一个名为 test 的 Topic，这个 Topic 只有一个分区以及一个备份：

```
> bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test

```

## 生产者生产消息

运行生产者，然后可以在控制台中输入一些消息，这些消息会发送到服务器：

```angular2html
> bin/kafka-console-producer.sh --broker-list localhost:9092 --topic test
This is a message
This is another message

```

## 消费者消费消息

启动消费者，然后获得服务器中 Topic 下的消息：

```angular2html
> bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --from-beginning
This is a message
This is another message

```

## 集群部署

复制配置为多份（Windows 使用 copy 命令代理）：

```angular2html
> cp config/server.properties config/server-1.properties
> cp config/server.properties config/server-2.properties

```

修改配置：

```angular2html
config/server-1.properties:
    broker.id=1
    listeners=PLAINTEXT://:9093
    log.dir=/tmp/kafka-logs-1

config/server-2.properties:
    broker.id=2
    listeners=PLAINTEXT://:9094
    log.dir=/tmp/kafka-logs-2

```

其中，broker.id 这个参数必须是唯一的。

端口故意配置的不一致，是为了可以在一台机器启动多个应用节点。

根据这两份配置启动三个服务器节点：

```
> bin/kafka-server-start.sh config/server.properties &
...
> bin/kafka-server-start.sh config/server-1.properties &
...
> bin/kafka-server-start.sh config/server-2.properties &
...
```

创建一个新的 Topic 使用 三个备份：

```angular2html
> bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 3 --partitions 1 --topic my-replicated-topic


```

查看主题：

```angular2html
> bin/kafka-topics.sh --describe --zookeeper localhost:2181 --topic my-replicated-topic
Topic:my-replicated-topic   PartitionCount:1    ReplicationFactor:3 Configs:
Topic: my-replicated-topic  Partition: 0    Leader: 1   Replicas: 1,2,0 Isr: 1,2,0

```

leader - 负责指定分区的所有读取和写入的节点。每个节点将成为随机选择的分区部分的领导者。

replicas - 是复制此分区日志的节点列表，无论它们是否为领导者，或者即使它们当前处于活动状态。

isr - 是“同步”复制品的集合。这是副本列表的子集，该列表当前处于活跃状态并且已经被领导者捕获。

## zookeeper-install.sh

```
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
# 安装 ZooKeeper 脚本
# @system: 适用于所有 linux 发行版本。
###################################################################################

EOF
printf "${RESET}"

printf "${GREEN}>>>>>>>> install zookeeper begin.${RESET}\n"

if [[ $# -lt 1 ]] || [[ $# -lt 2 ]]; then
	printf "${PURPLE}[Hint]\n"
	printf "\t sh zookeeper-install.sh [version] [path]\n"
	printf "\t Example: sh zookeeper-install.sh 3.4.12 /opt/zookeeper\n"
	printf "${RESET}\n"
fi

version=3.4.12
if [[ -n $1 ]]; then
	version=$1
fi

path=/opt/zookeeper
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
curl -o ${path}/zookeeper-${version}.tar.gz http://mirrors.hust.edu.cn/apache/zookeeper/zookeeper-${version}/zookeeper-${version}.tar.gz
tar zxf ${path}/zookeeper-${version}.tar.gz -C ${path}

printf "${GREEN}<<<<<<<< install zookeeper end.${RESET}\n"
```

## kafka-install.sh

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
# 安装 Kafka 脚本
# @system: 适用于所有 linux 发行版本。
###################################################################################

EOF
printf "${RESET}"

printf "${GREEN}>>>>>>>> install kafka begin.${RESET}\n"

command -v java > /dev/null 2>&1 || {
	printf "${RED}Require java but it's not installed.${RESET}\n";
	exit 1;
}

if [[ $# -lt 1 ]] || [[ $# -lt 2 ]]; then
	printf "${PURPLE}[Hint]\n"
	printf "\t sh kafka-install.sh [version] [path]\n"
	printf "\t Example: sh kafka-install.sh 2.2.0 /opt/kafka\n"
	printf "${RESET}\n"
fi

version=2.2.0
if [[ -n $1 ]]; then
	version=$1
fi

path=/opt/kafka
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
curl -o ${path}/kafka_2.12-${version}.tgz http://mirrors.tuna.tsinghua.edu.cn/apache/kafka/${version}/kafka_2.12-${version}.tgz
tar zxf ${path}/kafka_2.12-${version}.tgz -C ${path}

printf "${GREEN}<<<<<<<< install kafka end.${RESET}\n"
```
